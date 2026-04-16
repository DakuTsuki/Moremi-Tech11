import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Target, Users, Heart, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Every decision we make is guided by our mission to close the gender gap in tech across Africa." },
  { icon: Users, title: "Community First", description: "We build strong, supportive communities where girls uplift and inspire each other." },
  { icon: Heart, title: "Empowerment", description: "We believe every girl has the potential to lead, innovate, and transform the tech industry." },
  { icon: Award, title: "Excellence", description: "We maintain the highest standards in our programs, mentorship, and career support services." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="max-w-3xl mx-auto text-center">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Our Story ]</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              More than just <span className="text-gradient">code.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2020 in Lagos, Nigeria, Moremi Techstars Foundation was born from a simple belief: 
              the future of technology must include the voices, ideas, and leadership of women. We're bridging 
              the gender gap in tech by empowering girls and women with cutting-edge digital skills, mentorship, 
              and an unshakeable community.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "2,500+", label: "Girls Trained" },
              { value: "150+", label: "Events Hosted" },
              { value: "80+", label: "Expert Mentors" },
              { value: "12", label: "Active Programs" },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} animation="animate-fade-in-up" delay={i * 100}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Our Values ]</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              What drives us forward
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} animation="animate-fade-in-up" delay={i * 120}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <v.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold font-heading text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <AnimateOnScroll animation="animate-scale-in">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Our Vision ]</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-6">
              A world where every girl has equal access to tech opportunities
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              We envision an Africa where gender is no longer a barrier to entry in the tech industry. 
              Where every girl, regardless of her background, can dream big, learn fast, and build the future.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
