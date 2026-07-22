import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
<Navbar />

<main>
  <Hero />
  <FeaturedProjects />
  <About />
  <Skills />
  <Experience />
  <Blog />
  <Contact />
</main>

<Footer />
    </>
  );
}