import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Coffee Enthusiast",
    text: "The best coffee I've ever had. The rich aroma and smooth taste are absolutely unmatched. NYC Coffee has become my daily ritual.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Food Blogger",
    text: "From the moment you walk in, you know this is special. The atmosphere, the service, and of course, the incredible coffee. A must-visit!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Regular Customer",
    text: "I've been coming here for three years and the quality has never wavered. Their latte art alone is worth the visit. Truly extraordinary.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-10 md:p-14 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-serif italic">
                "{testimonials[current].text}"
              </p>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-serif text-lg font-bold text-accent">
                  {testimonials[current].name[0]}
                </span>
              </div>
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
