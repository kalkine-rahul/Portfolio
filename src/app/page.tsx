
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJest,
  SiFigma,
  SiAmazon,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { SiOpenai } from "react-icons/si";




import { FaServer, FaJira } from "react-icons/fa";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className="hidden md:flex gap-6 items-center">
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#ai-tools" className="hover:text-green-400">AI</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

    

  <section id="about" className="py-10 px-6 bg-black text-white">
  <div className="max-w-5xl mx-auto text-center">
 <section
      id="about"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Animated Arcs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full border border-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full border border-green-400 opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
        {/* Left Content */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi👋 I’m <span className="text-green-400">Rahul Kumar</span>
          </h1>

          <h2 className="text-5xl md:text-6xl font-bold">
            A Creative{" "}
            <span className="text-green-500">Frontend Developer</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I design and build{" "}
            <span className="text-yellow-400">scalable, user-friendly web apps</span> 
            with expertise in{" "}
            <span className="text-blue-400">Next.js, Node.js, Tailwind CSS</span>, 
            and modern cloud technologies.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">3.9+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">10+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">Worldwide Clients</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-green-500/30">
            <Image
              src="/static/images/profilemine.jpg" // replace with your own image
              alt="Rahul Kumar"
              width={400}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
    {/* Skill Logos */}
    <div className="flex flex-wrap justify-center gap-6 mb-6 text-5xl">
      {/* Web & Frameworks */}
      <SiNextdotjs className="hover:scale-125 transition-transform duration-300" title="Next.js" />
      <SiReact className="text-cyan-400 hover:scale-125 transition-transform duration-300" title="React" />
      <SiNodedotjs className="text-green-500 hover:scale-125 transition-transform duration-300" title="Node.js" />
      <SiExpress className="text-gray-300 hover:scale-125 transition-transform duration-300" title="Express.js" />
      <SiTailwindcss className="text-sky-400 hover:scale-125 transition-transform duration-300" title="Tailwind CSS" />
      <SiBootstrap className="text-purple-500 hover:scale-125 transition-transform duration-300" title="Bootstrap" />
      <FaServer className="text-yellow-400 hover:scale-125 transition-transform duration-300" title="REST APIs" />

      {/* Databases */}
      <SiMysql className="text-blue-500 hover:scale-125 transition-transform duration-300" title="MySQL" />
      <SiMongodb className="text-green-400 hover:scale-125 transition-transform duration-300" title="MongoDB" />

      {/* Core Web */}
      <SiTypescript className="text-blue-600 hover:scale-125 transition-transform duration-300" title="TypeScript" />
      <SiJavascript className="text-yellow-400 hover:scale-125 transition-transform duration-300" title="JavaScript" />
      <SiHtml5 className="text-orange-500 hover:scale-125 transition-transform duration-300" title="HTML5" />
      <SiCss3 className="text-blue-400 hover:scale-125 transition-transform duration-300" title="CSS3" />
      <SiJest className="text-red-500 hover:scale-125 transition-transform duration-300" title="Jest Testing" />

      {/* Collaboration */}
      <FaJira className="text-blue-500 hover:scale-125 transition-transform duration-300" title="Jira" />
      <span title="Agile" className="text-pink-400 font-bold text-3xl">Agile</span>

      {/* Design */}
      <SiFigma className="text-pink-500 hover:scale-125 transition-transform duration-300" title="Figma" />

      {/* Cloud */}
      <SiAmazon className="text-orange-400 hover:scale-125 transition-transform duration-300" title="AWS (S3, Lambda)" />

      {/* Version Control */}
      <SiGit className="text-red-500 hover:scale-125 transition-transform duration-300" title="Git" />
      <SiGithub className="hover:text-gray-300 hover:scale-125 transition-transform duration-300" title="GitHub" />
      <SiGitlab className="text-orange-500 hover:scale-125 transition-transform duration-300" title="GitLab" />
    </div>
  </div>
</section>



      {/* AI Assisted Development */}
      <section id="ai-tools" className="py-20 px-6 bg-gray-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">AI Assisted Development</h2>
    <p className="text-gray-300 mb-6">
      To improve productivity and write cleaner code, I actively use
      <span className="text-green-400"> AI-powered tools</span> that help me with
      code suggestions, debugging, and exploring optimized solutions.
    </p>

    {/* AI Tool Icons */}
    <div className="flex flex-wrap justify-center gap-6 mb-6 text-6xl">
      <SiGithubcopilot
        className="text-sky-400 hover:scale-125 transition-transform duration-300"
        title="GitHub Copilot"
      />
      <SiOpenai
        className="text-green-400 hover:scale-125 transition-transform duration-300"
        title="ChatGPT / OpenAI"
      />
      <SiFigma
        className="text-pink-500 hover:scale-125 transition-transform duration-300"
        title="Figma AI"
      />
    </div>

    <p className="text-gray-400 text-sm">
      ⚡ Leveraging <span className="text-blue-400">GitHub Copilot</span> for smart code completions
      and <span className="text-yellow-400">AI chat tools</span> for debugging and system design discussions.
    </p>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50 text-black">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Kalkine Project */}
          <div className="p-6 shadow rounded-xl bg-white">
            <img
              src="https://kalkine.com.au/static/assets/img-new/kalkinelogo-white-updated-new.svg"
              alt="Kalkine Project"
              className="rounded-lg mb-4 w-full h-40 object-contain"
            />
            <h3 className="font-semibold text-xl">Kalkine Stock Market Platform</h3>
            <p className="mt-2 text-sm text-gray-600">
              Multi-country stock market platform providing real-time insights and news
              across India, US, Canada, Australia, UK & NZ. Built scalable frontend in
              Next.js with backend REST APIs powered by Node.js, MySQL & MongoDB.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="/projects/kalkine"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                View Case Study
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* News Portal */}
          <div className="p-6 shadow rounded-xl bg-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASJ91rU1HzULL65K2p1FwnklShw7DKUkX-w&s"
              alt="News Portal"
              className="rounded-lg mb-4 w-full h-40 object-contain"
            />
            <h3 className="font-semibold text-xl">News Portal Section</h3>
            <p className="mt-2 text-sm text-gray-600">
              Built responsive news cards with pagination & category filters
              using API-driven content and Bootstrap grid.
            </p>
            <div className="mt-4">
              <a
                href="/projects/news-portal"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                View Case Study
              </a>
            </div>
          </div>

          {/* UI Components */}
          <div className="p-6 shadow rounded-xl bg-white">
            <img
              src="https://www.shutterstock.com/image-vector/ui-components-banner-web-icon-260nw-2545168245.jpg"
              alt="UI Components"
              className="rounded-lg mb-4 w-full h-40 object-contain"
            />
            <h3 className="font-semibold text-xl">UI Components Library</h3>
            <p className="mt-2 text-sm text-gray-600">
              Developed reusable UI components (Footer, Forms, Carousel, Header
              Megamenu) from Figma → Next.js.
            </p>
            <div className="mt-4">
              <a
                href="/projects/ui-components"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                View Case Study
              </a>
            </div>
          </div>

          {/* Email Templates */}
          <div className="p-6 shadow rounded-xl bg-white">
            <img
              src="https://s3-alpha.figma.com/hub/file/4927480915/3835a38d-4275-43de-9694-577ff819411c-cover.png"
              alt="Email Templates"
              className="rounded-lg mb-4 w-full h-40 object-contain"
            />
            <h3 className="font-semibold text-xl">Email Templates</h3>
            <p className="mt-2 text-sm text-gray-600">
              Designed and coded branded email templates for marketing,
              automation, and customer communications.
            </p>
            <div className="mt-4">
              <a
                href="/projects/email-templates"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                View Case Study
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="featured-project" className="py-20 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Project</h2>
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          {/* Project Logo */}
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            BullsEye – Real-time Stock Market Platform
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6">
            A full-stack stock market application with{" "}
            <span className="text-green-400">real-time stock tables, pagination, filters, stock change alerts,</span>
            and a live{" "}
            <span className="text-blue-400">stock-related news section.</span>
            Built using <span className="font-semibold">Next.js, Tailwind CSS, REST APIs, Axios, Node.js</span>,
            and implemented <span className="text-yellow-400">OTP-based authentication</span> for secure user access.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Tailwind</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">REST APIs</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Axios</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">OTP Auth</span>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/kalkine-rahul/gemini-chatbot"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400"
            >
              View Code
            </a>
            <a
              href="https://gemini-chatbot-hbrbtnzu5-kalkine-rahuls-projects.vercel.app/"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Interested in collaborating or have a project idea? Let’s connect!
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:rahul19965542@gmail.com" className="hover:text-green-400">
              Email
            </a>
            <a href="https://github.com/kalkine-rahul" target="_blank" className="hover:text-green-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rahul-kumar1996/" target="_blank" className="hover:text-green-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
