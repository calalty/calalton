import { ActionButton } from '@/components/ui/action-button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Copy } from 'lucide-react';
import { StatusLabel } from '../ui/status-label';

export const HeroSection = () => (
  <section className="py-16 px-8">
    <div className="flex items-center justify-between mb-8">
      <StatusLabel label="Software Engineer" />

      <StatusLabel
        color="green"
        label="AVAILABLE FOR WORK"
        className="bg-green-50 px-2 rounded-full"
      />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
          I&apos;m Cal Alton
        </h1>
        <p className="text-gray-600 mb-8 text-lg max-w-96">
          I build{' '}
          <span className="text-gray-700 font-medium">sharp, user-focused</span>{' '}
          apps with solid architecture and no fluff.
        </p>

        <div className="flex flex-wrap gap-4">
          <ActionButton>Let&apos;s Talk</ActionButton>
          <ActionButton variant="secondary" icon={<Copy className="h-4 w-4" />}>
            Copy Email
          </ActionButton>
        </div>
      </div>

      <div className="w-48 h-48 relative">
        <Avatar className="w-full h-full border-8 border-gray-100 shadow-md">
          <AvatarImage
            className="bg-gray-200 p-4"
            src="/hero.png"
            alt="Cal Alton"
          />
        </Avatar>
      </div>
    </div>
  </section>
);
