import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Code, Brain, Shield, BarChart3, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const programs = [
  {
    number: "01",
    icon: Code,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React — build real projects from day one. Our bootcamp takes you from beginner to job-ready in 12 weeks.",
    gallery: [
      { src: "/gallery/program1.jpg", caption: "Students building their first website" },
      { src: "/gallery/programs.jpg", caption: "React workshop — component architecture" },
      { src: "/gallery/extra.jpg", caption: "Web Dev Cohort 5 graduation" },
    ],
  },
  {
    number: "02",
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning, data models, and AI tools for the real world. Learn to build intelligent systems that solve real problems.",
    gallery: [
      { src: "/gallery/4.jpg", caption: "AI model training session" },
      { src: "/gallery/5.jpg", caption: "ML project presentations" },
      { src: "/gallery/6.jpg", caption: "AI mentorship pairing day" },
    ],
  },
  {
    number: "03",
    icon: Shield,
    title: "Cybersecurity",
    description: "Digital safety, ethical hacking, and security protocols. Protect organizations and build a career in one of tech's fastest-growing fields.",
    gallery: [
      { src: "/gallery/7.jpg", caption: "Ethical hacking lab session" },
      { src: "/gallery/8.jpg", caption: "Capture the Flag competition" },
      { src: "/gallery/9.jpg", caption: "Cybersecurity certification prep" },
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data Science",
    description: "Analyze data, create visualizations, and derive insights. Master Python, SQL, and modern analytics tools.",
    gallery: [
      { src: "/gallery/10.jpg", caption: "Python data analysis workshop" },
      { src: "/gallery/11.jpg", caption: "Dashboard building exercise" },
      { src: "/gallery/12.jpg", caption: "Data Science demo day" },
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Moremi Female Founders",
    description: "An accelerator for women-led tech startups. Get mentorship, funding guidance, and a community of ambitious founders.",
    gallery: [
      { src: "/gallery/13.jpg", caption: "Founder pitch practice session" },
      { src: "/gallery/1.jpg", caption: "Investor networking mixer" },
      { src: "/gallery/5.jpg", caption: "Accelerator graduation & demo day" },
    ],
  },
  {
    number: "06",
    icon: Users,
    title: "Moremi Tech Jobs",
    description: "Job placement and career support for graduates. Resume workshops, interview prep, and connections to hiring partners.",
    gallery: [
      { src: "/gallery/3.jpg", caption: "Resume & portfolio workshop" },
      { src: "/gallery/8.jpg", caption: "Mock interview session" },
      { src: "/gallery/11.jpg", caption: "Hiring partner meet & greet" },
    ],
  },
];

const Programs = () => (
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
            From coding bootcamps to career accelerators, our programs are designed to take you from curious beginner to confident tech professional.
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
                  <span className="text-5xl font-bold text-secondary/15 group-hover:text-secondary/30 transition-colors">{program.number}</span>
                  <program.icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{program.description}</p>

                {/* Program Gallery with Captions */}
                <div className="grid grid-cols-3 gap-2 mt-5">
                  {program.gallery.map((img, gi) => (
                    <Dialog key={gi}>
                      <DialogTrigger asChild>
                        <div className="aspect-square rounded-lg overflow-hidden cursor-pointer border border-border hover:shadow-md transition-all duration-300 relative group/img">
                          <img
                            src={img.src}
                            alt={img.caption}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                          />
                          <div className="absolute inset-0 bg-foreground/0 group-hover/img:bg-foreground/40 transition-colors duration-300" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
                        <img src={img.src} alt={img.caption} className="w-full h-auto max-h-[80vh] object-contain" onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }} />
                        <div className="p-4 text-center">
                          <p className="text-foreground font-medium text-sm">{program.title}</p>
                          <p className="text-muted-foreground text-xs mt-1">{img.caption}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>

                <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-full transition-transform hover:scale-[1.02]">Apply Now</Button>
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

export default Programs;
