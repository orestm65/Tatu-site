import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { salonImages } from "@/data/site-data";
import { Camera, Award, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Стерильность", text: "Одноразовые расходники, автоклав, медицинский контроль" },
  { icon: Award, title: "Призёры", text: "Мастера — призёры международных тату-конвенций" },
  { icon: Camera, title: "Фото-сессия", text: "Профессиональная фотосессия вашей работы в подарок" },
  { icon: Sparkles, title: "Премиум-уход", text: "Уходовый набор и подробная инструкция после сеанса" },
];

const About = () => {
  return (
    <section className="py-24 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-border/60">
              <img
                src={salonImages.studioWide}
                alt="Студия INKART"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-border/60">
                <img src={salonImages.inkTable} alt="Оборудование" className="w-full h-40 object-cover" loading="lazy" />
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="rounded-2xl overflow-hidden border border-border/60 cursor-pointer">
                    <img src={salonImages.cleanup} alt="Подготовка" className="w-full h-40 object-cover transition-transform hover:scale-105" loading="lazy" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-popover border-border">
                  <p className="text-sm text-muted-foreground">
                    Каждый сеанс начинается с дезинфекции рабочего места и подготовки одноразовых материалов.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary">О студии</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Студия, где <span className="text-gradient-primary">рождается искусство</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                INKART — это не просто тату-салон, а творческое пространство. Мы собрали мастеров разных стилей под одной крышей, чтобы вы нашли своего художника.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                С 2017 года мы выполнили более 4200 работ — от миниатюрных линий до полноценных рукавов. Каждый клиент получает индивидуальный подход, стерильность премиум-класса и результат, которым хочется гордиться.
              </p>
            </div>

            <Separator className="bg-border/60" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <Card key={f.title} className="bg-card/60 border-border/60 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-5 pb-5 space-y-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/20">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
