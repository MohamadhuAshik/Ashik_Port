import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { featuredProject, otherProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            title="Selected projects"
            description="A mix of full-stack applications and focused tools — each built end to end, from data model to interface."
          />
        </Reveal>

        {featuredProject && (
          <Reveal delay={0.1} className="mt-12">
            <article className="grid overflow-hidden rounded-2xl border border-hairline bg-surface/40 lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                <span className="absolute left-4 top-4 font-mono text-xs text-accent-sky">
                  01
                </span>
                <span className="absolute left-4 bottom-4 rounded-full border border-hairline-strong bg-void/70 px-3 py-1 font-mono text-[11px] text-accent-sky backdrop-blur-sm lg:hidden">
                  {featuredProject.category}
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <span className="hidden font-mono text-xs text-accent-sky lg:inline">
                  {featuredProject.category}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {featuredProject.description}
                </p>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {featuredProject.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-hairline bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  {featuredProject.liveUrl ? (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Live Demo
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="text-sm text-text-muted">
                      Live demo coming soon
                    </span>
                  )}
                  {featuredProject.githubUrl ? (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-surface px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors duration-300 hover:border-accent-sky/60 hover:text-accent-sky"
                    >
                      <FaGithub size={15} />
                      View Code
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
