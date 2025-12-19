import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "Când are loc webinarul?", answer: "Pe 25 decembrie 2025, între orele 19:00 și 21:00. Durează aproximativ 2 ore și este complet LIVE." },
  { question: "Cum primesc link-ul de acces?", answer: "Imediat după înscriere vei primi email de confirmare cu link-ul de acces. Vei primi și notificări pe 24 decembrie și în ziua webinarului." },
  { question: "Va fi înregistrare?", answer: "Da, dacă te înscrii dar nu poți participa LIVE, vei primi înregistrarea. Însă recomandăm participarea LIVE pentru a profita de energia evenimentului și a pune întrebări." },
  { question: "Pot participa de pe telefon?", answer: "Da. Webinarul e online, poți participa de pe orice device, laptop, tabletă, telefon. Recomand însă laptop/tabletă pentru experiență optimă, mai ușor să iei notițe, să vezi slide-urile." },
  { question: "Va fi vândut ceva la final?", answer: "Da la final voi prezenta setul de programe \"12 Luni – 12 Skilluri\" — un an în care te reconstruiești fundamental. 12 programe care lunar îți dezvoltă câte un skill de neînlocuit. Dacă simți că e pentru tine, te poți înscrie. Dacă nu, rămâi cu ceea ce ai învățat în webinar care e valoros în sine. NU îți vând ceva de ce nu ai nevoie. Te ajut să-ți realizezi obiectivele prin ghidare." }
];

const FAQSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 leading-tight">Întrebări <span className="text-primary">frecvente</span></h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-2xl border border-border/50 px-6 overflow-hidden data-[state=open]:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
