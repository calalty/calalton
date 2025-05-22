import { Github } from '@/components/icons/github';
import { Instagram } from '@/components/icons/instagram';
import { Linkedin } from '@/components/icons/linkedin';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/text-area';
import {
  Briefcase,
  Code,
  Folder,
  Home,
  Mail,
  Settings,
  User,
  Zap,
} from 'lucide-react';

export const skills = [
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'GraphQL',
  'Zustand',
  'ReactQuery',
  'Apollo',
  'Redis',
];

export const headerIcons = [
  { key: 'home', icon: <Home className="w-5 h-5" /> },
  { key: 'user', icon: <User className="w-5 h-5" /> },
  { key: 'folder', icon: <Folder className="w-5 h-5" /> },
  { key: 'code', icon: <Code className="w-5 h-5" /> },
  { key: 'mail', icon: <Mail className="w-5 h-5" /> },
];

export const socialIcons = [
  { key: 'linkedin', icon: <Linkedin /> },
  { key: 'github', icon: <Github /> },
  { key: 'instagram', icon: <Instagram /> },
];

export const projects = [
  {
    letter: 'A',
    company: 'AlgorithmViz',
    description: 'Interactive algorithm visualization tool',
  },
  {
    letter: 'D',
    company: 'DataSync',
    description: 'Real-time database synchronization library',
  },
  {
    letter: 'S',
    company: 'ScaleSentry',
    description: 'Performance monitoring SaaS platform',
  },
];

export const contactFields = [
  {
    id: 'name',
    label: 'Name',
    placeholder: 'Your name',
    type: 'text',
    Component: Input,
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Your email',
    type: 'email',
    Component: Input,
  },
  {
    id: 'message',
    label: 'Message',
    placeholder: 'Tell me about your project or question',
    Component: Textarea,
    additionalClassName: 'min-h-[120px]',
  },
];

export const philosophyPoints = [
  { icon: Zap, text: 'Performance-first mindset' },
  { icon: Code, text: 'Clean, maintainable code' },
  { icon: Settings, text: 'Scalable architecture' },
  { icon: Briefcase, text: 'User-centered solutions' },
];

export const colorMap = {
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-400',
  blue: 'bg-blue-500',
  gray: 'bg-gray-400',
};
