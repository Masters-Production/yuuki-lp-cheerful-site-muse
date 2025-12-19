import { MessageSquare, Star } from "lucide-react";

const testimonialePlaceholder = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 }
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

        {/* Testimonials Grid - Placeholders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialePlaceholder.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden aspect-[4/3] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* PLACEHOLDER: Înlocuiește cu imagine testimonial
              <img 
                src={`/path/to/testimonial-${testimonial.id}.jpg`}
                alt={`Testimonial ${testimonial.id}`}
                className="w-full h-full object-cover"
              />
              */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-10 h-10 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Testimonial #{testimonial.id}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    (Încarcă screenshot aici)
                  </p>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-primary/30 fill-primary/30" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for replacing */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full border border-border">
            <span className="text-sm text-muted-foreground">
              📝 Pentru a înlocui: editează TestimonialeSection.tsx și adaugă căile către imagini
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialeSection;
