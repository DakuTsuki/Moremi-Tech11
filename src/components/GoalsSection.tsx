import { Target, Wrench, Briefcase } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const goals = [
  {
    number: "01",
    icon: Target,
    title: "Bridging the Gender Gap",
    description:
      "Our primary goal is to bridge the gender gap in the tech industry by empowering girls and women with the skills and confidence they need to succeed in tech-related fields.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Skill Development",
    description:
      "We strive to equip girls and women with relevant technical skills, ensuring they have the necessary tools to excel in the tech industry.",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Career Support",
    description:
      "We offer comprehensive career support services, including mentorship programs, networking opportunities, and job placement assistance, to help girls and women advance in their tech careers.",
  },
];

const GoalsSection = () => {
  return (
    <section id="goals" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in-up" className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Our Goals
          </h2>
          <p className="text-muted-foreground">
            We are building the next female techstar
          </p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <AnimateOnScroll key={goal.number} animation="animate-fade-in-up" delay={i * 150}>
              <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1">
                <span className="text-4xl font-bold text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300">
                  {goal.number}
                </span>
                <div className="mt-4 mb-3">
                  <goal.icon className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
