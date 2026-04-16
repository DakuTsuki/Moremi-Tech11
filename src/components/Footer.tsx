import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import FooterLogo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <Link to="/" className="text-xl font-bold font-heading">
            <img src={FooterLogo} alt="Moremi Techstars" className="w-[9rem]" />
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
            Bridging the Gap in the tech industry by empowering girls and women with skills and confidence they need to succeed in tech-related fields.
          </p>
        </div>

        {/* Company */}
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

        {/* Contact */}
        <div>
          <h4 className="font-semibold font-heading mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span>08166301570, 08062598240</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary" />
              <span>hello@moremitechstars.org</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary mt-1" />
              <span>24, Oremeji Street, Ilupeju, Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold font-heading mb-4">Social Media</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>
              <a href="https://www.facebook.com/moremitechstars/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/moremitechstars" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@moremitechstars" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://instagram.com/moremitechstars" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/moremitechstars" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Moremi Techstars Foundation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
