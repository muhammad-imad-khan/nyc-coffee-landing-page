import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Coffee, Leaf, Award, Heart, Clock, MapPin } from "lucide-react";

const features = [
  { icon: Coffee, title: "Premium Blends", desc: "Handcrafted coffee blends sourced from the world's finest Arabica beans." },
  { icon: Leaf, title: "Sustainably Sourced", desc: "Ethically sourced beans from farms that prioritize environmental responsibility." },
  { icon: Award, title: "Award Winning", desc: "Recognized for excellence in roasting and brewing by industry experts." },
  { icon: Heart, title: "Made with Love", desc: "Every cup is crafted by passionate baristas with meticulous attention to detail." },
  { icon: Clock, title: "Freshly Roasted", desc: "Our beans are roasted daily to ensure maximum freshness and flavor." },
  { icon: MapPin, title: "Local Experience", desc: "Each location offers a unique ambiance reflecting local culture and style." },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            The NYC Coffee <span className="text-gradient">Difference</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 hover-lift group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <f.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
