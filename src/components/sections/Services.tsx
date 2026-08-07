import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { services } from "@/data/site-data";
import * as Icons from "lucide-react";

const Services = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Услуги</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Что мы <span className="text-gradient-primary">делаем</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Полный спектр услуг — от первой татуировки до сложных рукавов и лазерного удаления.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ?? Icons.Brush;
            return (
              <Card
                key={service.id}
                className="group relative bg-card/60 border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                <CardHeader className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 border border-primary/20 group-hover:bg-primary/25 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-3">
                  <Separator className="bg-border/60" />
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icons.Check className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="relative flex items-center justify-between pt-0">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{service.duration}</span>
                    <span className="text-xl font-bold text-gradient-gold">{service.price}</span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                        onClick={() => scrollTo("#booking")}
                      >
                        Записаться
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Перейти к бронированию</p>
                    </TooltipContent>
                  </Tooltip>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
