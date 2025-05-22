import { colorMap } from '@/app/constants';
import { cn } from '@/lib/utils';

type Props = {
  label: string;
  color?: keyof typeof colorMap;
  className?: string;
};

export const StatusLabel = ({ label, color = 'gray', className }: Props) => (
  <div
    className={cn(
      'text-sm text-gray-500 font-medium flex items-center',
      className,
    )}
  >
    <span className="relative flex h-1.5 w-1.5 mr-2">
      <span
        className={cn(
          'absolute h-full w-full rounded-full opacity-75 animate-ping',
          colorMap[color],
        )}
      />
      <span
        className={cn('relative h-1.5 w-1.5 rounded-full', colorMap[color])}
      />
    </span>
    {label}
  </div>
);
