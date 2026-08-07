import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Brush, ArrowRight, Star, ShieldCheck, Sparkles } from "lucide-react";
import { salonImages, stats } from "@/data/site-data";

const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonImages.hero}
          alt="Тату-мастер за работой"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl space-y-7 animate-fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              Премиальная тату-студия
            </Badge>
            <Badge variant="outline" className="border-border text-muted-foreground">
              <ShieldCheck className="h-3 w-3 mr-1 text-primary" />
              100% стерильно
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Искусство, которое <span className="text-gradient-primary">остаётся с вами</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Авторские татуировки от команды признанных мастеров. Индивидуальные эскизы, безупречная стерильность и атмосфера, в которой комфортно творить.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#booking")}
              className="bg-primary hover:bg-primary/90 glow-primary text-base h-12 px-8"
            >
              <Brush className="h-4 w-4" />
              Записаться на сеанс
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#portfolio")}
              className="border-border bg-secondary/30 backdrop-blur hover:bg-secondary/60 text-base h-12 px-8"
            >
              Смотреть работы
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl font-bold text-gradient-gold">
                  {s.value}{s.suffix}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Rating row */}
          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-2">
              <Avatar className="h-9 w-9 border-2 border-background">
                <AvatarImage src="https://images.pexels.com/photos/4912590/pexels-photo-4912590.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" />
                <AvatarFallback>К</AvatarFallback>
              </Avatar>
              <Avatar className="h-9 w-9 border-2 border-background">
                <AvatarImage src="https://images.pexels.com/photos/8727669/pexels-photo-8727669.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" />
                <AvatarFallback>А</AvatarFallback>
              </Avatar>
              <Avatar className="h-9 w-9 border-2 border-background">
                <AvatarImage src="https://images.pexels.com/photos/33222631/pexels-photo-33222631.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" />
                <AvatarFallback>И</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
                <span className="text-sm font-semibold ml-1">4.9</span>
              </div>
              <span className="text-xs text-muted-foreground">более 4200 отзывов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
