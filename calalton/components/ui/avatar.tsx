import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children?: React.ReactNode;
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

type AvatarImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  className?: string;
};

export const AvatarImage = ({
  src,
  alt,
  className,
  ...props
}: AvatarImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={500}
    height={500}
    className={cn('rounded-full w-full h-full object-contain', className)}
    {...props}
  />
);

type AvatarFallbackProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children?: React.ReactNode;
};

export const AvatarFallback = ({
  className,
  children,
  ...props
}: AvatarFallbackProps) => (
  <div
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full text-sm',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Avatar.displayName = 'Avatar';
