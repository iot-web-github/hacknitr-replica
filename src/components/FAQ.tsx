import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any student currently enrolled in a university or college can participate. We welcome all skill levels, from beginners to experienced developers!",
  },
  {
    question: "Do I need a team?",
    answer: "You can participate solo or in teams of up to 4 members. We also have team formation activities if you're looking for teammates!",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, any hardware you plan to use, government-issued ID, and lots of enthusiasm! We'll provide meals, snacks, and WiFi.",
  },
  {
    question: "Is there a participation fee?",
    answer: "No! TechHack is completely free to attend. We provide food, swag, and all the resources you need to build amazing projects.",
  },
  {
    question: "What if I'm a beginner?",
    answer: "Perfect! We have workshops, mentors, and beginner-friendly tracks. Hackathons are great places to learn and experiment with new technologies.",
  },
  {
    question: "How do I submit my project?",
    answer: "You'll submit your project through our platform before the deadline. Make sure to include a demo video, source code, and description of your project.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects are judged on innovation, technical complexity, design, and potential impact. Each track may have additional specific criteria.",
  },
  {
    question: "Can I work on an existing project?",
    answer: "No, all code must be written during the hackathon. However, you can use existing libraries, frameworks, and APIs as building blocks.",
  },
];

export const FAQ = () => {
  return (
    <section id="faqs" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
            Got Questions?
          </span>
          <div className="h-px w-32 bg-blueprint-line mx-auto mt-2 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sketch-text">
            FAQs
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border bg-card px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 border-2 border-dashed border-border">
          <p className="text-lg mb-3">Still have questions?</p>
          <p className="text-muted-foreground mb-4">
            Reach out to us on Discord or email us at{" "}
            <a href="mailto:hello@techhack.com" className="text-primary hover:underline font-semibold">
              hello@techhack.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
