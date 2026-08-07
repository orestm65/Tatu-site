import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { testimonials } from "@/data/site-data";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <section className="py-24 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Отзывы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Что говорят <span className="text-gradient-primary">клиенты</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Более 4200 довольных клиентов доверили нам свою кожу.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto px-10">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full bg-card/60 border-border/60 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6 pb-6 space-y-5">
                    <div className="flex items-start justify-between">
                      <Quote className="h-8 w-8 text-primary/40" />
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed italic">
                      «{t.text}»
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                      <Avatar className="h-11 w-11 border border-border">
                        <AvatarImage src={t.avatar} alt={t.name} />
                        <AvatarFallback>{getInitials(t.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{t.name}</span>
                        <span className="text-xs text-muted-foreground">Мастер: {t.master}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
