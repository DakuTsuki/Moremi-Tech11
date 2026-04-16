import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Target, Users, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Every decision we make is guided by our mission to close the gender gap in tech across Africa.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We build strong, supportive communities where girls uplift and inspire each other.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description:
      "We believe every girl has the potential to lead, innovate, and transform the tech industry.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in our programs, mentorship, and career support services.",
  },
];

const teamMembers = [
  {
    name: "SOOKO Adefolahan Ibiyemi",
    role: "Chairman / Board of Trustees",
    image: "https://moremitechstars.org/images/team1.jpg",
  },
  {
    name: "Adetogun Samuel Adegunju",
    role: "Founder / Project Manager",
    image: "https://moremitechstars.org/images/team2.png",
  },
  {
    name: "Olajumoke Odunsi",
    role: "Community Development Manager",
    image: "https://moremitechstars.org/images/team3.png",
  },
  {
    name: "Oki Betty Ayomide",
    role: "Brand Manager",
    image: "https://moremitechstars.org/images/team4.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll
            animation="animate-fade-in-up"
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              [ About Moremi ]
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              About <span className="text-gradient">Moremi</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My father's stories of Queen Moremi Ajasoro stayed with me. Her
              bravery in Ile-Ife inspired me to look at the tech industry and
              ask: Where are the women? According to UNESCO, women are still
              vastly under-represented in STEM. In a field where 91.7% of
              developers are male, Moremi Techstars Foundation is here to disrupt
              the status quo.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              We are a non-profit powered by passion and a team of incredible
              volunteers. We exist to educate, equip, and empower African girls
              to step into the light of technology. Whether it's inspiring a
              young girl to pick up her first laptop or supporting a woman
              navigating a tech career, we are here to ensure the future of tech
              is female.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Let's build this legacy together. For our daughters, for Nigeria,
              and for the bright future of Africa. 🇳🇬
            </p>

            <p className="text-foreground font-semibold mt-4">
              ~SOOKO Adefolahan Ibiyemi Chairman / Board of Trustees
            </p>

            {/* Continuation */}
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              Moremi Techstars Foundation, a registered non-profit in Nigeria
              (CAC/IT/6908580), operates globally, partnering with individuals,
              institutions, and communities to expand access to and equip young
              girls and women with cutting-edge digital skills, mentorship, and
              career support across Nigeria and Africa.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Images */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "https://moremitechstars.org/images/about1.png",
              "https://moremitechstars.org/images/about2.jpg",
              "https://moremitechstars.org/images/about3.png",
            ].map((src, i) => (
              <AnimateOnScroll
                key={i}
                animation="animate-fade-in-up"
                delay={i * 200}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt={`About Moremi ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-4">
              Our Vision
            </h2>
            <div className="flex gap-4 mb-10">
              <div className="w-1 bg-secondary rounded-full shrink-0" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                To create an avenue where women are equally represented and
                thrive across all career roles in Technology.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-up" delay={150}>
            <h2 className="text-3xl font-bold font-heading text-foreground mb-4">
              Our Mission
            </h2>
            <div className="flex gap-4">
              <div className="w-1 bg-secondary rounded-full shrink-0" />
              <div className="text-muted-foreground text-lg leading-relaxed space-y-2">
                <p>
                  • To build a community that embodies technical growth,
                  networking, mentorship and visibility amongst all level career
                  roles in Technology.
                </p>
                <p>
                  • Increase the number of girls and women in the fields of
                  technology and engineering
                </p>
                <p>• Inspiring the women of tomorrow, today in technology.</p>
                <p>• To help women consider, advance and stay in tech</p>
                <p>
                  • Giving a woman a voice for voice to achieve sustainability
                  and inclusion in the tech space.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "2,500+", label: "Girls Trained" },
              { value: "150+", label: "Events Hosted" },
              { value: "80+", label: "Expert Mentors" },
              { value: "12", label: "Active Programs" },
            ].map((stat, i) => (
              <AnimateOnScroll
                key={stat.label}
                animation="animate-fade-in-up"
                delay={i * 100}
              >
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll
            animation="animate-fade-in-up"
            className="text-center mb-14"
          >
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              [ Our Values ]
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              What drives us forward
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimateOnScroll
                key={v.title}
                animation="animate-fade-in-up"
                delay={i * 120}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <v.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold font-heading text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll
            animation="animate-fade-in-up"
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Meet The <span className="text-secondary">Team</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimateOnScroll
                key={member.name}
                animation="animate-scale-in"
                delay={i * 150}
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold font-heading text-foreground text-sm">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
