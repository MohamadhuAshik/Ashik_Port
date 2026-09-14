"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = {
  github: "https://github.com/mohamadhuashik",
  linkedin: "https://linkedin.com/in/mohamadhuashik",
  resume: "/resume.pdf",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-hairline bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-18 items-center justify-between py-3.5"
          aria-label="Primary"
        >
          <a
            href="#home"
            className="flex items-center gap-3 rounded-md"
            aria-label="Go to home section"
          >
            <div className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-accent-sky/50 bg-surface shadow-[0_0_12px_rgba(59,130,246,0.35)]">
              <Image
                src="/images/ashik-profile.jpg"
                alt="Mohamadhu Ashik S"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold text-text-primary">
                Mohamadhu Ashik
              </span>
              <span className="font-mono text-[11px] text-text-muted">
                full-stack developer
              </span>
            </span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-hairline bg-surface/50 p-1 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "text-void"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-sky"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-text-muted transition-colors hover:text-accent-sky"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-text-muted transition-colors hover:text-accent-sky"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              className="rounded-full border border-hairline-strong bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface text-text-primary lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-hairline bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    activeSection === item.id
                      ? "bg-surface text-accent-sky"
                      : "text-text-secondary hover:bg-surface hover:text-text-primary"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-4 border-t border-hairline px-4 pt-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="text-text-muted transition-colors hover:text-accent-sky"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="text-text-muted transition-colors hover:text-accent-sky"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.resume}
                  className="ml-auto rounded-full border border-hairline-strong bg-surface px-4 py-2 text-sm font-medium text-text-primary"
                >
                  Resume
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
