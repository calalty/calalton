import { headerIcons } from '@/app/constants';
import { ActionButton } from '@/components/ui/action-button';
import { Link as LinkIcon } from 'lucide-react';
import { IconLink } from '../ui/icon-link';

export const Header = () => (
  <header className="max-w-4xl w-full m-auto bg-white py-4 px-6 shadow-sm z-10 rounded-lg mt-4">
    <div className="w-full flex items-center justify-between">
      <nav className="flex items-center space-x-6">
        {headerIcons.map(({ icon, key }) => (
          <IconLink key={key} icon={icon} url="" />
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <ActionButton
          className="w-full"
          icon={<LinkIcon className="h-4 w-4" />}
        >
          Connect
        </ActionButton>
      </div>
    </div>
  </header>
);
