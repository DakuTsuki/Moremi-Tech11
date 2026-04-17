import { useEffect, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "Justina",
    image: "/images/team/team5.jpg",
    text: "What makes Moremi Tech Stars special is their genuine commitment to women in tech. Beyond technical skills, they focus on leadership, growth, and community. Thanks to them, I transitioned into tech smoothly and earned a promotion within my first year.",
  },
  {
    name: "Aderonke",
    image: "/images/team/team5.jpg",
    text: "Joining Moremi Tech Stars was a game-changer. I went from feeling lost to confident and empowered in my tech journey. The support and community helped me grow—and now I’m mentoring others.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll
          animation="animate-fade-in-up"
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Testimonials
          </h2>
          <p className="text-muted-foreground">
            See what they are saying about us
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="animate-scale-in"
          className="max-w-2xl mx-auto text-center"
        >
          <div className="transition-all duration-500">
            {/* Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-secondary/20">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote mark */}
            <p className="text-4xl text-secondary mb-2">“</p>

            {/* Text */}
            <p className="text-muted-foreground italic text-base leading-relaxed mb-6 max-w-xl mx-auto">
              {testimonial.text}
            </p>

            {/* Name */}
            <p className="font-semibold text-foreground font-heading">
              {testimonial.name}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-secondary scale-125"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
