import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  logo: ReactNode;
  company: string;
  description: string;
  bgColor?: string;
  className?: string;
  delay?: '100' | '200' | '300' | '400' | '500';
};

export const ProjectCard = ({
  logo,
  company,
  description,
  bgColor,
  className,
}: Props) => (
  <div
    className={cn(
      'flex items-center justify-between w-full p-5 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md border border-gray-200 hover:scale-[1.01] bg-white',
      className,
    )}
  >
    <div className="flex items-center space-x-4">
      <div
        className={cn(
          'h-12 w-12 rounded-lg flex items-center justify-center transition-colors group-hover:bg-gray-200',
          bgColor ?? 'bg-background',
        )}
      >
        {logo}
      </div>
      <div>
        <h3 className="font-medium text-lg text-gray-800">{company}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <ArrowRight className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
  </div>
);
