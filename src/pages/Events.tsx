import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Girls in AI Workshop",
    date: "May 15, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Lagos Tech Hub, Victoria Island",
    description: "An immersive workshop introducing girls aged 13-18 to artificial intelligence and machine learning basics.",
    tag: "Workshop",
  },
  {
    title: "Moremi Tech Summit 2026",
    date: "June 22-23, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Landmark Centre, Lagos",
    description: "Our flagship annual event bringing together 500+ women in tech for talks, panels, and networking.",
    tag: "Conference",
  },
  {
    title: "Code & Coffee Meetup",
    date: "July 5, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "CcHub, Yaba, Lagos",
    description: "A casual monthly meetup for our community to code together, share progress, and connect.",
    tag: "Meetup",
  },
  {
    title: "Cybersecurity Bootcamp",
    date: "August 10-14, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Online (Zoom)",
    description: "A 5-day intensive bootcamp covering ethical hacking, digital safety, and security fundamentals.",
    tag: "Bootcamp",
  },
];

const pastHighlights = [
  { title: "International Women's Day Tech Rally", attendees: "800+", year: "2025" },
  { title: "Moremi Hackathon", attendees: "200+", year: "2025" },
  { title: "Web Development Graduation", attendees: "150+", year: "2024" },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="max-w-3xl mx-auto text-center">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Events ]</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Where the <span className="text-gradient">magic happens.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join us at workshops, bootcamps, summits, and meetups designed to empower the next generation of female tech leaders.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="mb-10">
            <h2 className="text-2xl font-bold font-heading text-foreground">Upcoming Events</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <AnimateOnScroll key={event.title} animation="animate-fade-in-up" delay={i * 100}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{event.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-full transition-transform hover:scale-[1.02]">
                    Register Now
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in-up" className="text-center mb-10">
            <h2 className="text-2xl font-bold font-heading text-foreground">Past Highlights</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pastHighlights.map((event, i) => (
              <AnimateOnScroll key={event.title} animation="animate-fade-in-up" delay={i * 100}>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-secondary mb-1">{event.attendees}</p>
                  <p className="text-sm text-muted-foreground mb-1">attendees</p>
                  <h3 className="font-semibold font-heading text-foreground text-sm mt-3">{event.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{event.year}</p>
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

export default Events;
