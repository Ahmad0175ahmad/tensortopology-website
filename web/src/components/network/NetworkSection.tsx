import { SectionHeading } from '../ui/SectionHeading';
import { RackDiagram } from './RackDiagram';
import { CaseStats } from './CaseStats';
import { GroupAccordion } from './GroupAccordion';
import { SupportPlans } from './SupportPlans';

export function NetworkSection() {
  return (
    <section id="networking" className="py-16 bg-gradient-to-b from-transparent to-bp-700/20">
      <div className="container mx-auto px-4">
        <SectionHeading id="networking-heading">Networking Engineering</SectionHeading>
        <p className="text-xl text-paper/70 mb-12 max-w-3xl">
          We install, secure and look after the networks, servers and systems that a business runs
          on.
        </p>

        {/* Interactive Rack */}
        <div className="mb-16">
          <RackDiagram />
        </div>

        {/* Quick Shop Stats */}
        <div className="mb-16">
          <CaseStats />
        </div>

        {/* All Services Accordion */}
        <div className="mb-16">
          <GroupAccordion />
        </div>

        {/* Support Plans */}
        <div className="mb-12">
          <SupportPlans />
        </div>

        {/* Link to projects */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-fiber text-bp-900 rounded-md font-medium hover:bg-fiber/90 transition-colors"
          >
            See the networking projects
          </a>
        </div>
      </div>
    </section>
  );
}
