import React, { forwardRef, type FC, type RefObject } from "react";

const Work = forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <section
      id="work"
      ref={ref}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
          <div className="text-sm text-muted-foreground font-mono">
            {new Date().getFullYear()} - 2018
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {[
            {
              year: "2025",
              role: "Lead Developer",
              company: "Faktion | AI Solutions & Capabilities",
              description:
                "Leading development of AI-powered solutions and capabilities for enterprise clients.",
              tech: ["Node.js", "GraphQL", "TypeScript"],
            },
            {
              year: "2024",
              role: "Senior Full Stack Developer",
              company: "Faktion",
              description:
                "Building scalable full-stack applications with modern web technologies.",
              tech: ["React", "Node.js", "GraphQL"],
            },
            {
              year: "2024",
              role: "Senior TypeScript Developer",
              company: "Duco (formerly Metamaze)",
              description:
                "Developed enterprise-grade TypeScript applications following acquisition.",
              tech: ["TypeScript", "React", "Node.js"],
            },
            {
              year: "2021-2024",
              role: "Full-stack Developer",
              company: "Metamaze (Start-up of the year 2022)",
              description:
                "Built intelligent document processing solutions using modern web technologies.",
              tech: ["TypeScript", "React", "GraphQL"],
            },
            {
              year: "2020-2021",
              role: "Software Development Consultant",
              company: "Elmos",
              description:
                "Provided consulting services for various software development projects.",
              tech: ["Vue.js", ".NET", "Web API"],
            },
            {
              year: "2018-2019",
              role: "Software Developer",
              company: "XERXES",
              description:
                "Developed ERP systems including track and trace, timesheets, and automation features.",
              tech: ["JavaScript", "C#", ".NET"],
            },
          ].map((job, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {job.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {job.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Work;
