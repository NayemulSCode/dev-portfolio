"use client";
import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };
  useEffect(() => {
    type SectionKey =
      | "home"
      | "about"
      | "technologies"
      | "projects"
      | "contact";

    const sectionMeta: Record<
      SectionKey,
      { title: string; description: string }
    > = {
      home: {
        title: "Home | Dev Profile",
        description: "Welcome to Dev Profile - explore my work and skills",
      },
      about: {
        title: "About Me | Dev Profile",
        description:
          "Learn more about Dev Profile journey as a frontend developer.",
      },
      technologies: {
        title: "Technologies | Dev Profile",
        description:
          "Discover the tools and technologies I use to build great apps.",
      },
      projects: {
        title: "Projects | Dev Profile",
        description: "Explore my real-world projects and case studies.",
      },
      contact: {
        title: "Contact | Dev Profile",
        description: "Get in touch for collaborations or opportunities.",
      },
    };
    const handleScroll = () => {
      const sections: SectionKey[] = [
        "home",
        "about",
        "technologies",
        "projects",
        "contact",
      ];
      let current: SectionKey = "home";
      for (const sec of sections) {
        const element = document.getElementById(sec);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = sec;
        }
      }
      setActiveSection(current);
      const meta = sectionMeta[current];
      if (meta) {
        document.title = meta.title;
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
          descTag.setAttribute("content", meta.description);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
      <About isDarkMode={isDarkMode} />
      <Technologies isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
