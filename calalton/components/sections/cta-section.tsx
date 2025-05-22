import { ActionButton } from '@/components/ui/action-button';
import { Link } from 'lucide-react';

export const CTASection = () => (
  <section className="py-6 text-center">
    <div className="max-w-2xl mx-auto px-6 py-12 rounded-2xl bg-gray-50 border border-gray-200">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Let&apos;s work together.
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        I&apos;m currently available for freelance work and open to discussing
        new opportunities.
      </p>

      <div className="flex justify-center space-x-4">
        <ActionButton icon={<Link className="h-4 w-4" />}>Connect</ActionButton>

        <ActionButton variant="outline">View My Process</ActionButton>
      </div>
    </div>
  </section>
);
