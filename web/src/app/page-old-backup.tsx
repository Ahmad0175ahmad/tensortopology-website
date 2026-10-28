import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { AiSection } from '@/components/ai/AiSection';
import { NetworkSection } from '@/components/network/NetworkSection';
import { TaglineSection } from '@/components/hero/TaglineSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />

      <TaglineSection />

      <About />

      <AiSection />

      <NetworkSection />

      <ProjectsSection />

      <ContactSection />
    </>
  );
}
