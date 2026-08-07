import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { pricingPlans } from "@/data/site-data";
import { Check, Crown } from "lucide-react";

const Pricing = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Цены</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Прозрачные <span className="text-gradient-primary">тарифы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Финальная стоимость зависит от размера и сложности. Точную цену мастер назовёт на консультации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative bg-card/60 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary/50 glow-primary scale-[1.02]"
                  : "border-border/60 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground glow-primary px-3 py-1">
                    <Crown className="h-3 w-3 mr-1" />
                    Популярный
                  </Badge>
                </div>
              )}
              <CardHeader className="space-y-3 pt-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="flex items-baseline gap-1.5 pt-2">
                  <span className="text-4xl font-bold text-gradient-gold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">₽ {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Separator className="bg-border/60" />
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary/80 hover:bg-secondary text-foreground"}`}
                  onClick={() => scrollTo("#booking")}
                >
                  Выбрать тариф
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
