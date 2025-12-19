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
    <section className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce spun participanții anteriori
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rezultate reale de la oameni reali care au aplicat aceste strategii.
          </p>
        </div>

        {/* Testimonials Grid - Placeholders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialePlaceholder.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background border-2 border-dashed border-border rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center"
            >
              {/* PLACEHOLDER: Înlocuiește cu imagine testimonial
              <img 
                src={`/path/to/testimonial-${testimonial.id}.jpg`}
                alt={`Testimonial ${testimonial.id}`}
                className="w-full h-full object-cover"
              />
              */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Testimonial #{testimonial.id}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Încarcă screenshot aici)
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for replacing */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground bg-muted/50 inline-block px-4 py-2 rounded-full">
            📝 Pentru a înlocui: editează TestimonialeSection.tsx și adaugă căile către imagini
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialeSection;
