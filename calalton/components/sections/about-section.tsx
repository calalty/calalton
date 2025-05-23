import { skills } from '@/app/constants';
import { SectionHeader } from '@/components/ui/section-header';
import { DevelopmentPhilosophyCard } from '../ui/development-philosophy';

export const AboutSection = () => (
  <section className="py-6 px-4 bg-gray-50 rounded-lg">
    <SectionHeader title="About Me" />

    <div className="space-y-8">
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            I build systems that scale.
          </h2>

          <div>
            <p className="text-gray-600 text-lg">
              I&apos;m a software engineer with a focus on performance, systems
              design, and clean, maintainable code.
            </p>
            <p className="text-gray-600 text-lg mt-5">
              I work across the stack and love solving technical problems that
              actually matter.
            </p>
          </div>
        </div>

        <DevelopmentPhilosophyCard />
      </div>

      <div className="flex flex-wrap gap-3">
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
  </section>
);
