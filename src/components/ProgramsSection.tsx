import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import programsImage from "@/assets/programs-image.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const programs = [
  "Moremi Techstars Skill",
  "Moremi Tech Jobs",
  "Moremi Female Founders In Tech",
  "Moremi Techstars Accelerators Program",
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in-up" className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Our Programs
          </h2>
          <p className="text-muted-foreground mb-6">
            Explore what we are offering
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 mb-12 transition-transform duration-200 hover:scale-105">
            Apply Now
          </Button>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={programsImage}
                alt="Women learning tech in a workshop"
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </AnimateOnScroll>
          <div className="space-y-4">
            {programs.map((program, i) => (
              <AnimateOnScroll key={program} animation="animate-slide-in-right" delay={i * 100}>
                <div className="flex items-center justify-between p-5 bg-muted/50 rounded-xl border border-border hover:border-secondary/30 hover:bg-muted transition-all duration-300 cursor-pointer group hover:-translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-secondary/20">
                      <ChevronRight className="w-5 h-5 text-secondary transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                    <span className="font-medium text-foreground text-sm">
                      {program}
                    </span>
                  </div>
                  <span className="text-2xl font-light text-muted-foreground group-hover:text-secondary group-hover:rotate-45 transition-all duration-300">
                    +
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
