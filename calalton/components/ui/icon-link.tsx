import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  url: string;
  icon: ReactNode;
};

export const IconLink = ({ icon, url }: Props) => (
  <Link
    href={url}
    className="group relative flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:text-foreground"
  >
    <span className="absolute inset-0 bg-gray-100 opacity-0 scale-75 transition-all duration-500 rounded-full group-hover:opacity-100 group-hover:scale-110" />
    <span className="relative z-10">{icon}</span>
  </Link>
);
