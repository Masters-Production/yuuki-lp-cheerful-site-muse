import { HelpCircle } from "lucide-react";
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
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Întrebări frecvente
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ai{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              întrebări?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Răspunsuri la cele mai comune întrebări despre webinar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl px-8 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold text-lg hover:no-underline py-6 group-hover:text-primary transition-colors">
                <span className="flex items-center gap-4">
                  <span className="shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm font-bold group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                    {index + 1}
                  </span>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 pl-12 leading-relaxed">
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
