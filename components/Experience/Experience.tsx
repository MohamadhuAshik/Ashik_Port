import { Check, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Currently Building"
            title="No employment history yet — here's what I'm actively working through."
            description="Instead of a job timeline, this is a roadmap of the skills and workflows I'm building toward, in the order I'm tackling them."
          />
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/70 via-hairline-strong to-transparent sm:left-[11px]"
          />
          <ol className="space-y-10">
            {timeline.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.06}>
                <li className="relative">
                  <span
                    className={cn(
                      "absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-full border sm:-left-10",
                      entry.status === "done" &&
                        "border-accent-cyan bg-accent-cyan/15 text-accent-cyan",
                      entry.status === "active" &&
                        "border-accent-sky bg-accent-sky/15 text-accent-sky",
                      entry.status === "upcoming" &&
                        "border-hairline-strong bg-surface text-text-muted"
                    )}
                  >
                    {entry.status === "done" && <Check size={12} />}
                    {entry.status === "active" && (
                      <Loader2 size={12} className="animate-spin" />
                    )}
                  </span>

                  <div className="rounded-xl border border-hairline bg-surface/40 p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {entry.title}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 font-mono text-[11px]",
                          entry.status === "done" &&
                            "bg-accent-cyan/10 text-accent-cyan",
                          entry.status === "active" &&
                            "bg-accent-sky/10 text-accent-sky",
                          entry.status === "upcoming" &&
                            "bg-surface-2 text-text-muted"
                        )}
                      >
                        {entry.status === "done" && "Done"}
                        {entry.status === "active" && "In progress"}
                        {entry.status === "upcoming" && "Up next"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {entry.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
