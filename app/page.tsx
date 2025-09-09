"use client";

import { useEffect, useRef, useState } from "react";

import Connect from "@/components/sections/connect";
import Footer from "@/components/sections/footer";
import Intro from "@/components/sections/intro";
import Work from "@/components/sections/work";

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const introRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    [introRef.current, workRef.current, connectRef.current].forEach(
      (section) => {
        if (section) observer.observe(section);
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <Intro ref={introRef} />
        <Work ref={workRef} />
        <Connect ref={connectRef} />
        <Footer isDark={isDark} setIsDark={setIsDark} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;
