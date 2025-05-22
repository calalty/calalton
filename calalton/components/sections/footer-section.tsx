import { socialIcons } from '@/app/constants';
import { IconLink } from '../ui/icon-link';
import { StatusLabel } from '../ui/status-label';

export const FooterSection = () => (
  <footer className="pb-8">
    <div className="mb-8 flex justify-between bg-gray-50 items-center py-4 px-4 rounded-lg">
      <StatusLabel label="Socials" />

      <div className="flex space-x-5">
        {socialIcons.map(({ icon, key }) => (
          <IconLink key={key} icon={icon} url="" />
        ))}
      </div>
    </div>

    <div className="text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Cal Alton – All Rights Reserved</p>
    </div>
  </footer>
);
