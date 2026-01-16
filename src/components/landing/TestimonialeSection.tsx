import { MessageSquare, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";
import testimonial7 from "@/assets/testimonial-7.png";

const testimonials = [
  { id: 1, image: testimonial1 },
  { id: 2, image: testimonial2 },
  { id: 3, image: testimonial3 },
  { id: 4, image: testimonial4 },
  { id: 5, image: testimonial5 },
  { id: 6, image: testimonial6 },
  { id: 7, image: testimonial7 },
];

const TestimonialeSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-card overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-[10%] opacity-20">
        <MessageSquare className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-24 left-[5%] opacity-10">
        <Star className="w-12 h-12 text-primary fill-primary" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-primary" />
            Povești de succes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ce spun{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              participanții anteriori
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Rezultate reale de la oameni reali care au aplicat aceste strategii.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 break-inside-avoid"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              
              <img 
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                className="w-full h-auto block"
              />

              {/* Corner Decoration */}
              <div className="absolute top-3 right-3 flex gap-1 z-20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialeSection;