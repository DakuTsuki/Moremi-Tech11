import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-secondary text-xs font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              [ Est. 2020 — Lagos, Nigeria ]
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-[1.1] mb-6 animate-fade-in-up">
              The future{" "}
              <br className="hidden md:block" />
              is <span className="text-gradient">hers.</span>
            </h1>
            <p className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Moremi Techstars equips young women with cutting-edge digital skills, mentorship,
              and an unshakeable community to lead in tech.
            </p>
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Link to="/programs">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-105 gap-2">
                  Join a Program <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="rounded-full px-8 py-3 text-sm font-semibold border-secondary text-secondary hover:bg-secondary/10 transition-transform duration-200 hover:scale-105">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Young African women working on laptops in a modern workspace"
                width={1280}
                height={720}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
