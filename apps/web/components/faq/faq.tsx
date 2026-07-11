import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is ORBIT?",
    answer:
      "A modern productivity platform designed for teams who want full control over their workflow and data.",
  },
  {
    question: "Is ORBIT really free?",
    answer:
      "Yes — the core platform is MIT-licensed and completely free to use, self-host, and modify.",
  },
  {
    question: "How do I get started?",
    answer:
      "Clone the repo, follow the quickstart guide, and you'll be up and running in under 5 minutes.",
  },
  {
    question: "Can I self-host ORBIT?",
    answer: "Absolutely. ORBIT is built to be self-hosted with a single Docker command.",
  },
  {
    question: "Does ORBIT have a cloud version?",
    answer: "We're working on a managed cloud offering. Join the waitlist to get early access.",
  },
  {
    question: "How can I contribute?",
    answer: "Check out our GitHub — we welcome contributions of all sizes.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl tracking-tight">FAQ</h2>
          <p className="font-normal text-muted-foreground text-base md:text-lg mt-3">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <Accordion className="gap-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border bg-card not-last:border-b data-open:border-primary/20"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline data-open:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="font-normal text-muted-foreground leading-relaxed">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
