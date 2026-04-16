import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import  Logo  from "@/assets/logo.png"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-heading text-foreground">
            <img src={Logo} className="w-[9rem]"/>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                location.pathname === link.href
                  ? "text-secondary"
                  : "text-foreground/70 hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6 text-xs tracking-wider uppercase">
            Donate
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-secondary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" className="mt-2 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">
            Donate
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
