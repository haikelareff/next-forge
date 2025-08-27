import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

const HrevLogo = () => (
  <svg
    className="h-[24px] w-[24px]"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Hrev Dev</title>
    <defs>
      <linearGradient id="hrev-nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <rect x="10" y="20" width="15" height="60" rx="2" fill="url(#hrev-nav-gradient)" />
    <rect x="30" y="35" width="15" height="45" rx="2" fill="url(#hrev-nav-gradient)" />
    <rect x="50" y="25" width="15" height="55" rx="2" fill="url(#hrev-nav-gradient)" />
    <rect x="70" y="40" width="15" height="40" rx="2" fill="url(#hrev-nav-gradient)" />
    <circle cx="50" cy="15" r="8" fill="url(#hrev-nav-gradient)" />
  </svg>
);

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/hrevdev/hrev-dev',
  links: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Components',
      url: '/components',
    },
    {
      text: 'Templates',
      url: '/templates',
    },
    {
      text: 'Services',
      url: '/services',
    },
    {
      text: 'Docs',
      url: '/docs',
    },
  ],
  nav: {
    title: (
      <div className="flex items-center gap-3">
        <HrevLogo />
        <div className="flex flex-col">
          <p className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hrev Dev
          </p>
          <p className="text-xs text-muted-foreground -mt-1">Premium UI & Templates</p>
        </div>
      </div>
    ),
  },
};
