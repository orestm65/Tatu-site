import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { salonImages } from "@/data/site-data";
import { ArrowRight, Brush } from "lucide-react";

const CTA = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-primary/30 glow-primary">
          <div className="absolute inset-0 z-0">
            <img
              src={salonImages.process}
              alt="Татуировка"
              className="h-full w-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          </div>
          <CardContent className="relative z-10 py-16 px-8 md:px-16 text-center md:text-left max-w-3xl">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <Brush className="h-3 w-3 mr-1" />
              Готовы начать?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Ваша история заслуживает <span className="text-gradient-primary">лучшего исполнения</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Запишитесь на бесплатную консультацию — мастер поможет определиться со стилем, местом и эскизом. Без обязательств.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={() => scrollTo("#booking")} className="bg-primary hover:bg-primary/90 h-12 px-8 text-base">
                Записаться на сеанс
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("#contacts")} className="border-border bg-secondary/30 backdrop-blur h-12 px-8 text-base">
                Задать вопрос
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
