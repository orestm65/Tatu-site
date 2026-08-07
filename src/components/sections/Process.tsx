import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/data/site-data";
import * as Icons from "lucide-react";

const Process = () => {
  return (
    <section className="py-24 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Как мы работаем</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Процесс <span className="text-gradient-primary">от идеи до результата</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Прозрачный путь в четыре шага — без сюрпризов и лишних вопросов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          {processSteps.map((step) => {
            const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[step.icon] ?? Icons.Circle;
            return (
              <Card key={step.id} className="relative bg-card/60 border-border/60 hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="pt-6 pb-6 space-y-4 text-center">
                  <div className="relative inline-flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 border border-primary/25 group-hover:bg-primary/25 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-primary bg-background border border-primary/30 rounded-full px-2 py-0.5">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
