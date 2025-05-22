import { FileQuestion } from 'lucide-react';

type Props = {
  sectionName: string;
};

export const NoContent = ({ sectionName }: Props) => (
  <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
    <FileQuestion className="w-10 h-10 mb-3 text-gray-400" />
    <p className="text-lg font-medium">{`No ${sectionName} yet`}</p>
    <p className="text-sm mt-1">Check back soon for updates.</p>
  </div>
);
