import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-scale-in">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto transition-shadow duration-500 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-6">
              Become The Next Female{" "}
              <span className="text-secondary">Techstars</span> Now
            </h2>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-105">
              Apply to Program
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
