import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  { question: "Când are loc webinarul?", answer: "Pe 25 decembrie 2025, între orele 19:00 și 21:00. Durează aproximativ 2 ore și este complet LIVE." },
  { question: "Cum primesc link-ul de acces?", answer: "Imediat după înscriere vei primi email de confirmare cu link-ul de acces. Vei primi și notificări pe 24 decembrie și în ziua webinarului." },
  { question: "Va fi înregistrare?", answer: "Da, dacă te înscrii dar nu poți participa LIVE, vei primi înregistrarea. Însă recomandăm participarea LIVE pentru a profita de energia evenimentului și a pune întrebări." },
  { question: "Pot participa de pe telefon?", answer: "Da. Webinarul e online, poți participa de pe orice device, laptop, tabletă, telefon. Recomand însă laptop/tabletă pentru experiență optimă, mai ușor să iei notițe, să vezi slide-urile." },
  { question: "Va fi vândut ceva la final?", answer: "Da la final voi prezenta setul de programe \"12 Luni – 12 Skilluri\" — un an în care te reconstruiești fundamental. 12 programe care lunar îți dezvoltă câte un skill de neînlocuit. Dacă simți că e pentru tine, te poți înscrie. Dacă nu, rămâi cu ceea ce ai învățat în webinar care e valoros în sine. NU îți vând ceva de ce nu ai nevoie. Te ajut să-ți realizezi obiectivele prin ghidare." }
];

const FAQSection = () => {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Ai întrebări?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Întrebări
            <br />
            <span className="text-primary">frecvente</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group bg-card rounded-3xl border-2 border-border/50 px-8 overflow-hidden data-[state=open]:border-primary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10 transition-all duration-300 hover:border-primary/30"
            >
              <AccordionTrigger className="text-left text-xl font-bold hover:no-underline py-8 group-data-[state=open]:text-primary transition-colors">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-lg flex-shrink-0 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                    {index + 1}
                  </span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pl-14">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
