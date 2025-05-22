import { skills } from '@/app/constants';
import { SectionHeader } from '@/components/ui/section-header';
import { DevelopmentPhilosophyCard } from '../ui/development-philosophy';

export const AboutSection = () => (
  <section className="py-6 px-4 bg-gray-50 rounded-lg">
    <SectionHeader title="About Me" />

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        I build systems that scale.
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-4">
        <div className="md:col-span-2">
          <p className="text-gray-600 text-lg">
            I&apos;m a software engineer with a focus on performance, systems
            design, and clean, maintainable code. Based in Mancheseter, I work
            across the stack and love solving technical problems that actually
            matter.
          </p>

          <p className="text-gray-600 text-lg mt-5">
            I care about architecture that holds up, UI that doesn&apos;t get in
            the way, and keeping things simple where possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <DevelopmentPhilosophyCard />
      </div>
    </div>
  </section>
);
