import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="text-xl font-bold font-heading">
            <img src={Logo} alt="Moremi Techstars" className="w-[9rem]" />
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
            Bridging the Gap in the tech industry by empowering girls and women with skills and confidence they need to succeed in tech-related fields.
          </p>
        </div>
        <div>
          <h4 className="font-semibold font-heading mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-secondary transition-colors">Programs</Link></li>
            <li><Link to="/events" className="hover:text-secondary transition-colors">Events</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            <li><Link to="/donate" className="hover:text-secondary transition-colors">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold font-heading mb-4">Get In Touch</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-secondary" /><span>+234-816-263-8910</span></div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-secondary" /><span>Moremi@gmail.com</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Moremi Techstars Foundation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
