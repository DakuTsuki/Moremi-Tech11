import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Moremi Techstars workshop session", caption: "Workshop Session" },
  { src: "/gallery/2.jpg", alt: "Mentorship program meeting", caption: "Mentorship Program" },
  { src: "/gallery/3.jpg", alt: "Tech training for girls", caption: "Tech Training" },
  { src: "/gallery/4.jpg", alt: "Community event", caption: "Community Event" },
  { src: "/gallery/5.jpg", alt: "Graduation ceremony", caption: "Graduation Ceremony" },
  { src: "/gallery/6.jpg", alt: "Collaboration session", caption: "Collaboration Session" },
  { src: "/gallery/7.jpg", alt: "Leadership workshop", caption: "Leadership Workshop" },
  { src: "/gallery/8.jpg", alt: "Coding bootcamp", caption: "Coding Bootcamp" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in-up" className="text-center mb-14">
          <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">[ Our Impact in Action ]</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Gallery
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-scale-in"
              delay={index * 80}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-card border border-border hover:shadow-lg transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <p className="p-4 text-center text-muted-foreground">{image.caption}</p>
                </DialogContent>
              </Dialog>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
