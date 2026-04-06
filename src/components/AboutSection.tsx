import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import beansImg from "@/assets/beans.jpg";
import shopImg from "@/assets/shop-interior.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={shopImg} alt="NYC Coffee shop interior" loading="lazy" width={800} height={600} className="w-full object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-background"
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src={beansImg} alt="Premium arabica beans" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Extraordinary <span className="text-gradient">Moments</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              New York Coffee is an American-style chain of coffee houses that serves various
              coffee blends. We source premium 100% Arabica beans grown in optimal weather
              conditions and roast them locally at our plants.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              During the roasting process, we ensure that quality assurance standards are met
              so that we deliver great taste consistently. Our passion is to create more than
              just great coffee — it's about the experience.
            </p>
            <div className="flex gap-8">
              {[
                { number: "15+", label: "Locations" },
                { number: "100%", label: "Arabica" },
                { number: "10K+", label: "Daily Cups" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-gradient">{stat.number}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
