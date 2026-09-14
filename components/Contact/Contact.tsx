import { Mail, Phone, MapPin, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/Contact/ContactForm";

const contactLinks = [
  {
    label: "mohamadhuashik@gmail.com",
    href: "mailto:mohamadhuashik@gmail.com",
    icon: Mail,
  },
  {
    label: "+91 7092136152",
    href: "tel:+917092136152",
    icon: Phone,
  },
  {
    label: "Madurai, Tamil Nadu",
    href: "https://maps.google.com/?q=Madurai,Tamil+Nadu",
    icon: MapPin,
  },
  {
    label: "linkedin.com/in/mohamadhuashik",
    href: "https://linkedin.com/in/mohamadhuashik",
    icon: FaLinkedin,
  },
  {
    label: "github.com/mohamadhuashik",
    href: "https://github.com/mohamadhuashik",
    icon: FaGithub,
  },
  {
    label: "Download Resume PDF",
    href: "/resume.pdf",
    icon: FileDown,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Let&apos;s build something exceptional together.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
              Whether you have an upcoming engineering role, a product in
              need of scalable full-stack architecture, or an idea to discuss,
              feel free to reach out directly.
            </p>

            <ul className="mt-8 space-y-3">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={href.startsWith("http") || href.endsWith(".pdf") ? "noreferrer noopener" : undefined}
                    className="inline-flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-accent-sky"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-surface/50 text-accent-sky">
                      <Icon size={16} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent-cyan" />
              <span className="text-xs font-medium text-text-secondary">
                Currently open to new opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
