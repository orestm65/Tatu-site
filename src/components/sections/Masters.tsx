import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { masters } from "@/data/site-data";
import { Briefcase, Brush } from "lucide-react";

const Masters = () => {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <section id="masters" className="py-24 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Команда</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Наши <span className="text-gradient-primary">мастера</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Признанные художники с многолетним опытом и наградами международных конвенций.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters.map((master) => (
            <Card key={master.id} className="group bg-card/60 border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="items-center text-center pb-2">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer">
                      <Avatar className="h-28 w-28 border-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                        <AvatarImage src={master.avatar} alt={master.name} className="object-cover" />
                        <AvatarFallback>{getInitials(master.name)}</AvatarFallback>
                      </Avatar>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 bg-popover border-border">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">{master.bio}</p>
                      <Separator className="bg-border/60" />
                      <p className="text-xs text-primary flex items-center gap-1.5">
                        <Brush className="h-3 w-3" />
                        Выполнено работ: <span className="font-semibold">{master.works}</span>
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <h3 className="text-lg font-bold mt-3">{master.name}</h3>
                <p className="text-xs text-primary font-medium">{master.role}</p>
              </CardHeader>
              <CardContent className="space-y-3 pt-2">
                <Separator className="bg-border/60" />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {master.styles.map((style) => (
                    <Badge key={style} variant="secondary" className="bg-secondary/80 text-muted-foreground text-[10px]">
                      {style}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                  Опыт: <span className="text-foreground font-medium">{master.experience}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masters;
