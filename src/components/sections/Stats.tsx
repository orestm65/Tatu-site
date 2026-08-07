import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Users, Smile, Star } from "lucide-react";

const statsData = [
  { icon: Award, value: 95, display: "8+", label: "лет на рынке" },
  { icon: Smile, value: 100, display: "4200+", label: "довольных клиентов" },
  { icon: Users, value: 60, display: "12", label: "мастеров в команде" },
  { icon: Star, value: 98, display: "4.9", label: "средний рейтинг" },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-border/40 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((s) => (
            <Card key={s.label} className="bg-card/60 border-border/60 hover:border-primary/30 transition-colors group">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 border border-primary/20 group-hover:bg-primary/25 transition-colors">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-gradient-gold">{s.display}</span>
                </div>
                <div className="space-y-2">
                  <Progress value={s.value} className="h-1.5 bg-secondary [&>div]:bg-primary" />
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
