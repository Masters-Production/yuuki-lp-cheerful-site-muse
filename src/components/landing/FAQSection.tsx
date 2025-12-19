import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Este cu adevărat gratuit?",
    answer: "Da, participarea la webinar este 100% gratuită. Nu există costuri ascunse. Singura investiție este timpul tău - 90 de minute care îți pot schimba perspectiva și rezultatele."
  },
  {
    question: "Ce se întâmplă dacă nu pot participa live?",
    answer: "Îți recomandăm să participi live pentru a beneficia de sesiunea de întrebări și răspunsuri. Totuși, dacă te înscrii și nu poți participa, vei primi acces la înregistrare pentru o perioadă limitată."
  },
  {
    question: "Am nevoie de cunoștințe speciale pentru a participa?",
    answer: "Nu. Conținutul este conceput pentru a fi accesibil tuturor, indiferent de nivelul de experiență. Vei primi informații practice pe care le poți aplica imediat."
  },
  {
    question: "Voi primi materiale suplimentare?",
    answer: "Da! Toți participanții primesc acces la mini-evaluarea personalizată menționată, plus un sumar cu cele 12 skill-uri și pașii de acțiune discutați în webinar."
  },
  {
    question: "Cum mă înscriu?",
    answer: "Simplu! Apasă pe butonul 'Rezervă-ți locul GRATUIT' de pe această pagină, completează formularul cu datele tale, și vei primi pe email toate detaliile de conectare."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Întrebări frecvente
          </h2>
          <p className="text-muted-foreground text-lg">
            Răspunsuri la cele mai comune întrebări despre webinar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
