import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="max-w-3xl mx-auto text-center">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Contact ]</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Let's <span className="text-gradient">connect.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a question, want to partner, or ready to join? We'd love to hear from you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Contact Form */}
            <AnimateOnScroll animation="animate-slide-in-left">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                    <Input placeholder="Jane" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                    <Input placeholder="Doe" className="rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input type="email" placeholder="jane@example.com" className="rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <Input placeholder="How can we help?" className="rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell us more..." className="rounded-lg min-h-[120px]" />
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-full py-3 transition-transform hover:scale-[1.02]">
                  Send Message
                </Button>
              </form>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll animation="animate-slide-in-right">
              <div className="space-y-8">
                
                <div>
                  <h3 className="text-xl font-semibold font-heading text-foreground mb-4">Get in touch</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Whether you're a student, mentor, sponsor, or just curious about what we do — 
                    reach out. We respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-5">
                  
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">
                        hello@moremitechstars.org
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">
                        08166301570, 08062598240
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Location</p>
                      <p className="text-muted-foreground text-sm">
                        24, Oremeji Street, Ilupeju, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                </div>

                <div className="bg-primary rounded-xl p-6 mt-8">
                  <h4 className="font-semibold text-primary-foreground mb-2">
                    Want to partner with us?
                  </h4>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    We're always looking for organizations, mentors, and sponsors to help us reach more girls across Africa.
                  </p>
                </div>

              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
