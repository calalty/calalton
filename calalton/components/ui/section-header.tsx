import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { ActionButton } from './action-button';
import { StatusLabel } from './status-label';

type Props = {
  title: string;
  className?: string;
  showButton?: boolean;
};

export const SectionHeader = ({ title, className, showButton }: Props) => (
  <div className={cn('flex items-center justify-between mb-4', className)}>
    <StatusLabel label={title} />
    {showButton && (
      <ActionButton
        variant="secondary"
        className="flex-row-reverse"
        icon={<ArrowRight className="h-4 w-4" />}
      >
        View All
      </ActionButton>
    )}
  </div>
);
