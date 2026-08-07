import { Brush, Instagram, Send, MessageCircle, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { contactInfo, navLinks } from "@/data/site-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Send,
  MessageCircle,
  Youtube,
};

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
                <Brush className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight">INKART</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tattoo Studio</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Премиальная тату-студия. Авторские работы, стерильность и атмосфера, в которой рождается искусство на коже.
            </p>
            <div className="flex gap-2">
              {contactInfo.socials.map((s) => {
                const Icon = iconMap[s.icon] ?? MessageCircle;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 hover:bg-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Часы работы</h4>
            <ul className="space-y-2 text-sm">
              {contactInfo.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {h.day}
                  </span>
                  <span className="text-foreground font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/60" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} INKART Tattoo Studio. Все права защищены.</p>
          <p className="flex items-center gap-1.5">
            Сделано с <span className="text-primary">●</span> в Москве
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
