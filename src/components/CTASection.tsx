import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  return (
    <section id="cta" className="relative section-padding overflow-hidden" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      
      {/* Floating elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-foreground/10"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            right: -50 + i * 30,
            top: -30 + i * 40,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4">Stay Connected</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Join the NYC Coffee Family
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Subscribe for exclusive offers, new blend announcements, and a free coffee on your birthday.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full px-6 py-3.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
            />
            <Button variant="hero" size="lg" className="rounded-full px-8" type="submit">
              <Send size={16} />
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
