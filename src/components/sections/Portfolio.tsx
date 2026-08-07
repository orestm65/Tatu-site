import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { galleryItems, styleCategories } from "@/data/site-data";
import { ZoomIn } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Портфолио</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Наши <span className="text-gradient-primary">работы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Каждая татуировка — уникальная история. Выберите стиль, чтобы увидеть примеры.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {styleCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className={activeCategory === cat.id ? "bg-primary" : "border-border text-muted-foreground hover:text-foreground"}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group relative overflow-hidden cursor-pointer border-border/60 hover:border-primary/40 transition-all duration-300 animate-scale-in">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Badge className="bg-primary/80 text-primary-foreground mb-2">{item.category}</Badge>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                  <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4 text-primary" />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 bg-background border-border overflow-hidden">
                <ScrollArea className="max-h-[85vh]">
                  <div className="space-y-0">
                    <div className="aspect-[3/4] md:aspect-[4/3] overflow-hidden">
                      <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6 space-y-3">
                      <Badge className="bg-primary/15 text-primary border-primary/30">{item.category}</Badge>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        Пример работы из портфолио INKART. Каждая татуировка создаётся по индивидуальному эскизу после консультации с мастером.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            Работы в этой категории скоро появятся.
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
