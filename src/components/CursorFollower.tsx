import { useEffect, useRef } from "react";

const isTextHoverTarget = (target: EventTarget | null) => {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest("p, h1, h2, h3, h4, h5, h6, a, button, label, span, strong, em")
  );
};

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const onMouseOver = (event: MouseEvent) => {
      if (isTextHoverTarget(event.target)) {
        cursor.classList.add("cursor-text-hover");
      }
    };

    const onMouseOut = (event: MouseEvent) => {
      if (isTextHoverTarget(event.target)) {
        cursor.classList.remove("cursor-text-hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <span className="cursor-ring" />
      <span className="cursor-core" />
    </div>
  );
};

export default CursorFollower;
