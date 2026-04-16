import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Code, Brain, Shield, BarChart3, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    number: "01",
    icon: Code,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React — build real projects from day one. Our bootcamp takes you from beginner to job-ready in 12 weeks.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning, data models, and AI tools for the real world. Learn to build intelligent systems that solve real problems.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Cybersecurity",
    description: "Digital safety, ethical hacking, and security protocols. Protect organizations and build a career in one of tech's fastest-growing fields.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data Science",
    description: "Analyze data, create visualizations, and derive insights. Master Python, SQL, and modern analytics tools.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Moremi Female Founders",
    description: "An accelerator for women-led tech startups. Get mentorship, funding guidance, and a community of ambitious founders.",
  },
  {
    number: "06",
    icon: Users,
    title: "Moremi Tech Jobs",
    description: "Job placement and career support for graduates. Resume workshops, interview prep, and connections to hiring partners.",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="max-w-3xl mx-auto text-center">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Programs ]</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Skills that shape <span className="text-gradient">the future.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From coding bootcamps to career accelerators, our programs are designed to take you from 
              curious beginner to confident tech professional.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, i) => (
              <AnimateOnScroll key={program.number} animation="animate-fade-in-up" delay={i * 100}>
                <div className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-secondary/15 group-hover:text-secondary/30 transition-colors">
                      {program.number}
                    </span>
                    <program.icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{program.description}</p>
                  <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-full transition-transform hover:scale-[1.02]">
                    Apply Now
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Programs;
