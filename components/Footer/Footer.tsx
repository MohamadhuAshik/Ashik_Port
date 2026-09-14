import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Go to home section"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline-strong bg-surface font-display text-sm font-semibold text-accent-sky">
            MA
          </span>
          <span className="font-display text-sm font-semibold text-text-primary">
            Mohamadhu Ashik S
          </span>
        </a>

        <p className="max-w-sm text-sm text-text-muted">
          Full Stack Developer · Building scalable digital systems that feel effortless.
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent-sky"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mohamadhuashik"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-text-muted transition-colors hover:text-accent-sky"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/mohamadhuashik"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-text-muted transition-colors hover:text-accent-sky"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:mohamadhuashik@gmail.com"
            aria-label="Send an email"
            className="text-text-muted transition-colors hover:text-accent-sky"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="w-full border-t border-hairline pt-6">
          <p className="font-mono text-xs text-text-muted">
            © {year} Mohamadhu Ashik S. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
