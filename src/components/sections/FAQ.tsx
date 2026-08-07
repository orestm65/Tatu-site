import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqItems } from "@/data/site-data";
import { Circle as HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Вопросы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Частые <span className="text-gradient-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Собрали ответы на вопросы, которые задают чаще всего.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card/60 border-border/60">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-border/60">
                  <AccordionTrigger className="text-left text-base hover:text-primary transition-colors py-5">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
