import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  variant?: 'default' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const ActionButton = ({
  variant = 'default',
  children,
  className,
  icon,
  onClick,
}: Props) => (
  <Button
    className={cn(
      'rounded-md flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer',
      className,
    )}
    variant={variant}
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    {children}
  </Button>
);
