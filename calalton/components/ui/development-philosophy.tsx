import { philosophyPoints } from '@/app/constants';
import { Card } from './card';

export const DevelopmentPhilosophyCard = () => (
  <Card className="p-6 bg-white border border-gray-200 shadow-sm min-w-60">
    <h3 className="font-medium mb-4 text-gray-800">Development Philosophy</h3>
    <ul className="space-y-3">
      {philosophyPoints.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-center gap-3 text-gray-700">
          <Icon className="h-5 w-5 text-gray-600" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  </Card>
);
