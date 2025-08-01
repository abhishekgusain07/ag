import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { socials } from "../../constants/social";
import projectData from "../../constants/projects.json";
import { PiLightbulbFill } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import ProjectCard from "@/components/projectCard";
import ProjectsSection from "@/components/tabsOrigin";
import GitGraph from "./components/gitgraph";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const projects = projectData;

const content = [
  {
    title: "Collaborative Editing",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export const metadata: Metadata = {
  title: "Abhishek Gusain",
  description: "engineer at the intersection of design and web development",
};

// Icon component for consistent logo display
const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center w-10 h-10 bg-neutral-2 dark:bg-neutral-dark-2 rounded-lg overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className="object-contain"
      crossOrigin="anonymous"
    />
  </div>
);

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md px-4 py-28 flex flex-col gap-8">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <div>
          <h1 className="text-4xl text-neutral-8 dark:text-neutral-dark-8  tracking-tighter text-balance">
            <span className="font-semibold">Abhishek Gusain</span>
          </h1>
        </div>
      </div>
      <p className="pt-4 text-sm tracking-wide">
        Hi there, I'm <strong className="font-bold">Abhishek Gusain</strong>, a
        passionate builder and problem-solver. I thrive on creating{" "}
        <span className="dark:text-white text-black font-bold">
          innovative solutions
        </span>{" "}
        that make people's lives better. Always{" "}
        <span className="dark:text-white text-black">alert and aware</span>, I
        love <strong className="font-bold">connecting with new people</strong>{" "}
        and embracing fresh experiences. My journey is fueled by{" "}
        <span className="dark:text-white text-black font-bold">curiosity</span>{" "}
        and a drive to transform ideas into{" "}
        <span className="dark:text-white text-black">meaningful impact</span>.
        When I'm not coding, you'll find me exploring new perspectives and{" "}
        <strong className="font-bold">pushing boundaries</strong>.
      </p>

      <div className="w-fit grid grid-cols-3 gap-2 pt-4 tracking-tight md:flex md:flex-row md:items-start">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target={social.target}
            rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
            className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline"
          >
            <social.icon className="" />
            <span className="text-sm">{social.name}</span>
            <RiArrowRightUpLine className="opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
          </a>
        ))}
        {/* <Link
          href="/logs"
          className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline"
        >
          <PiLightbulbFill className="" />
          <span className="text-sm">devlog</span>
          <RiArrowRightUpLine className="opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
        </Link> */}
      </div>

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-title mb-2">Projects</h2>
        <ProjectsSection />
      </section>
      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-title mb-2">
          Github Contributions
        </h2>
        <GitGraph />
      </section>
    </main>
  );
}
