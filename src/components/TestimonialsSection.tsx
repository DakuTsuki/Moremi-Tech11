import testimonialImg from "@/assets/testimonial-1.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in-up" className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Testimonials
          </h2>
          <p className="text-muted-foreground">
            See what they are saying about us
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-scale-in" className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-secondary/20 animate-float">
            <img
              src={testimonialImg}
              alt="Badmus Olabisi"
              loading="lazy"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-muted-foreground italic text-base leading-relaxed mb-6">
            "Our primary goal is to bridge the gender gap in the tech industry by empowering
            girls and women with the skills and confidence they need to succeed in tech-related fields."
          </p>
          <p className="font-semibold text-foreground font-heading">Badmus Olabisi</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
