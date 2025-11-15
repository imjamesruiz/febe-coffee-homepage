import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Are large upgrades available?",
      answer: "As of now, we do not offer upgrading to a large size for any of our drinks. We may bring it in the future if there is a high demand.",
    },
    {
      question: "What type of matcha is used?",
      answer: "Our matcha is from the brands Aiya and Mizuba Tea Co. We use Organic Ceremonial Matcha from Aiya and Organic Hojicha from Mizuba Tea Co. We also sell 30g Aiya and 40g Mizuba Matcha in store for $31.",
    },
    {
      question: "What type of sweetener is used?",
      answer: "We use homemade Madagascar vanilla syrup and simple syrup (sugar + water). We also offer sugar-free vanilla syrup and honey.",
    },
    {
      question: "Are there any pastries vegetarian/vegan?",
      answer: "All of our pastries are vegetarian with the exception of one, but we do not offer vegan options.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px]">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-[42px] font-medium text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-secondary rounded-lg shadow-soft transition-all duration-300 hover:shadow-medium"
            >
              <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group [&[data-state=open]>svg]:rotate-180">
                <span className="font-sans font-semibold text-[17px] sm:text-lg text-primary leading-tight pr-4">
                  {faq.question}
                </span>
                <ChevronDown className="h-5 w-5 text-accent shrink-0 transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0">
                <p className="font-sans text-[15px] text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
