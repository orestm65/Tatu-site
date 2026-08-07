import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { bookingMasters, timeSlots } from "@/data/site-data";
import { bookingMasters as bm } from "@/data/site-data";
import { CalendarDays, Clock, CircleCheck as CheckCircle2, Sparkles, CircleAlert as AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState<string>("");
  const [master, setMaster] = useState<string>("any");
  const [styleValue, setStyleValue] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const progress = [
    !!date, !!slot, !!name && !!phone, consent,
  ].filter(Boolean).length;
  const progressPercent = (progress / 4) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !slot || !name || !phone || !consent) {
      toast({
        variant: "destructive",
        title: "Не все поля заполнены",
        description: "Выберите дату, время и заполните контакты.",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Заявка принята!",
      description: `Мы свяжемся с вами в течение часа. Дата: ${format(date, "dd.MM.yyyy")} в ${slot}.`,
    });
  };

  return (
    <section id="booking" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">Бронирование</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Запись на <span className="text-gradient-primary">сеанс</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите дату и удобное время — мы подтвердим запись в течение часа.
          </p>
        </div>

        {submitted ? (
          <Card className="max-w-2xl mx-auto bg-card/60 border-primary/40 glow-primary">
            <CardContent className="pt-10 pb-10 text-center space-y-5">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Заявка успешно отправлена!</h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами по телефону <span className="text-foreground font-medium">{phone}</span> для подтверждения.
                </p>
                {date && slot && (
                  <div className="flex items-center justify-center gap-2 pt-2 text-sm text-primary">
                    <CalendarDays className="h-4 w-4" />
                    {format(date, "d MMMM yyyy", { locale: ru })} в {slot}
                  </div>
                )}
              </div>
              <Button variant="outline" onClick={() => setSubmitted(false)} className="border-border">
                Записаться ещё раз
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-4xl mx-auto bg-card/60 border-border/60">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="space-y-1.5">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Форма бронирования
                  </CardTitle>
                  <CardDescription>Заполните шаги — прогресс отображается ниже</CardDescription>
                </div>
                <div className="flex items-center gap-3 min-w-[160px]">
                  <Progress value={progressPercent} className="h-2 w-28 bg-secondary [&>div]:bg-primary" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{progress}/4</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: date + slot */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-xs font-bold text-primary">1</span>
                    <h3 className="text-base font-semibold">Выберите дату</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg border border-border bg-background/50 p-3">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                        locale={ru}
                        className="p-0"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        Доступные слоты времени
                      </Label>
                      {!date ? (
                        <Alert className="bg-secondary/40 border-border">
                          <AlertCircle className="h-4 w-4 text-primary" />
                          <AlertTitle>Выберите дату</AlertTitle>
                          <AlertDescription>
                            Сначала выберите день в календаре слева.
                          </AlertDescription>
                        </Alert>
                      ) : (
                        <RadioGroup value={slot} onValueChange={setSlot} className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {timeSlots.map((t) => (
                            <div key={t}>
                              <RadioGroupItem value={t} id={`slot-${t}`} className="peer sr-only" />
                              <Label
                                htmlFor={`slot-${t}`}
                                className="flex items-center justify-center px-2 py-2 text-sm rounded-md border border-border bg-secondary/40 cursor-pointer hover:bg-primary/10 hover:border-primary/40 peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary transition-all"
                              >
                                {t}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 2: master + style */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-xs font-bold text-primary">2</span>
                    <h3 className="text-base font-semibold">Мастер и стиль</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="master-select">Мастер</Label>
                      <Select value={master} onValueChange={setMaster}>
                        <SelectTrigger id="master-select">
                          <SelectValue placeholder="Выберите мастера" />
                        </SelectTrigger>
                        <SelectContent>
                          {bm.map((m) => (
                            <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="style-select">Стиль татуировки</Label>
                      <Select value={styleValue} onValueChange={setStyleValue}>
                        <SelectTrigger id="style-select">
                          <SelectValue placeholder="Выберите стиль" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realism">Реализм</SelectItem>
                          <SelectItem value="dark">Дарк</SelectItem>
                          <SelectItem value="fineline">Файн-лайн</SelectItem>
                          <SelectItem value="oldskool">Олдскул</SelectItem>
                          <SelectItem value="geometric">Геометрия</SelectItem>
                          <SelectItem value="minimal">Минимализм</SelectItem>
                          <SelectItem value="notsure">Ещё не определился</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Step 3: contacts */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-xs font-bold text-primary">3</span>
                    <h3 className="text-base font-semibold">Контактные данные</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bk-name">Имя</Label>
                      <Input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Как к вам обращаться" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bk-phone">Телефон</Label>
                      <Input id="bk-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bk-comment">Комментарий (необязательно)</Label>
                    <Textarea id="bk-comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Опишите идею, размер, место на теле..." className="min-h-[80px]" />
                  </div>
                </div>

                {/* Step 4: consent */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-1" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Я согласен на обработку персональных данных и подтверждаю, что мне исполнилось 18 лет
                    </Label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 glow-primary h-12 text-base">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Booking;
