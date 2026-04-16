import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Gift, Users, Star } from "lucide-react";

const donationTiers = [
  { amount: "₦5,000", label: "Supporter", description: "Provides learning materials for one girl for a month.", icon: Heart },
  { amount: "₦25,000", label: "Champion", description: "Sponsors a girl's full bootcamp enrollment including laptop access.", icon: Star },
  { amount: "₦100,000", label: "Partner", description: "Funds an entire workshop session for 30+ girls.", icon: Users },
  { amount: "Custom", label: "Visionary", description: "Choose your own amount and make a difference at any level.", icon: Gift },
];

const Donate = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in-up" className="max-w-3xl mx-auto text-center">
          <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Support Us ]</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
            Invest in <span className="text-gradient">her future.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your donation directly empowers young African girls with the tech skills, mentorship, and opportunities they need to thrive. Every contribution, no matter the size, changes a life.
          </p>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Donation Tiers */}
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {donationTiers.map((tier, i) => (
            <AnimateOnScroll key={tier.label} animation="animate-fade-in-up" delay={i * 100}>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <tier.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-3xl font-bold text-secondary mb-1">{tier.amount}</p>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-2">{tier.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{tier.description}</p>
                <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-full transition-transform hover:scale-[1.02]">
                  Donate {tier.amount}
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>

    {/* Custom Donation */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-scale-in" className="max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-2">Custom Donation</h2>
            <p className="text-muted-foreground text-sm mb-6">Enter any amount you'd like to contribute</p>
            <div className="flex gap-3 mb-6">
              <Input type="number" placeholder="Enter amount (₦)" className="rounded-full text-center text-lg" min={1} />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-full py-3 text-sm font-semibold transition-transform hover:scale-105">
              Donate Now
            </Button>
            <p className="text-muted-foreground text-xs mt-4">
              All donations go directly to funding programs, workshops, and scholarships for girls in tech.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Impact Section */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <AnimateOnScroll animation="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Your Impact</h2>
          <div className="grid grid-cols-3 gap-8 mb-10">
            {[
              { value: "2,500+", label: "Girls Supported" },
              { value: "150+", label: "Events Funded" },
              { value: "12", label: "Active Programs" },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} animation="animate-fade-in-up" delay={i * 100}>
                <div>
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With your help, we can continue to bridge the gender gap in tech across Africa. Thank you for believing in the power of education and community.
          </p>
        </AnimateOnScroll>
      </div>
    </section>

    <Footer />
  </div>
);

export default Donate;
