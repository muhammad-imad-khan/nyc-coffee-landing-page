import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-accent" />
              <span className="font-serif text-xl font-bold text-primary-foreground">NYC Coffee</span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium coffee experiences crafted with passion. From bean to cup, excellence in every sip.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Our Coffee", "Locations", "Careers"].map((l) => (
                <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              {["FAQ", "Contact", "Franchise", "Privacy Policy"].map((l) => (
                <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((l) => (
                <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm">
          © {new Date().getFullYear()} New York Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
