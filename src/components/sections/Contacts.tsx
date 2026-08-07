import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/data/site-data";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Send,
  MessageCircle,
  Youtube,
};

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        variant: "destructive",
        title: "Заполните поля",
        description: "Имя, email и сообщение обязательны.",
      });
      return;
    }
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим на ваш email в течение 24 часов.",
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contacts" className="py-24 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Контакты</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Свяжитесь <span className="text-gradient-primary">с нами</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ответим на любой вопрос и поможем выбрать мастера и стиль.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="space-y-4">
            <Card className="bg-card/60 border-border/60 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Адрес студии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                <p className="text-xs text-muted-foreground mt-2">2 минуты от м. Тверская</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-card/60 border-border/60 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="text-sm hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-card/60 border-border/60 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-primary transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/60 border-border/60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Часы работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {contactInfo.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </div>
                ))}
                <Separator className="bg-border/60 my-3" />
                <div className="flex gap-2">
                  {contactInfo.socials.map((s) => {
                    const Icon = socialIcons[s.icon] ?? MessageCircle;
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        aria-label={s.name}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 hover:bg-primary/20 hover:border-primary/40 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback form */}
          <Card className="bg-card/60 border-border/60">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Напишите нам — ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ct-name">Имя</Label>
                    <Input id="ct-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ct-email">Email</Label>
                    <Input id="ct-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ct-subject">Тема обращения</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="ct-subject">
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consult">Консультация</SelectItem>
                      <SelectItem value="booking">Запись на сеанс</SelectItem>
                      <SelectItem value="coverup">Cover-up / удаление</SelectItem>
                      <SelectItem value="collab">Сотрудничество</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ct-message">Сообщение</Label>
                  <Textarea id="ct-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ваш вопрос или сообщение..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
