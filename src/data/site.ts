// Edit your details here. Every page reads from this file.
export const site = {
  name: 'Hrittick',
  description: 'Student who builds things to understand them.',
  email: 'hritt@proton.me',
  timeZone: 'Asia/Dhaka',
  nav: [
    { label: 'About', href: '/about/' },
    { label: 'Work', href: '/work/' },
    { label: 'Skills', href: '/skills/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/hrittm' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hrittick/' },
    { label: 'X', href: 'https://x.com/hrittm/' },
    { label: 'Instagram', href: 'https://www.instagram.com/0xhrit/' },
    { label: 'Facebook', href: 'https://www.facebook.com/0xhrit/' },
  ],
};

// Add `href: 'https://github.com/...'` to a project to show a link on its row.
export const projects = [
  {
    name: 'dotfiles',
    tag: 'Arch + Hyprland',
    description:
      'A collection of configuration files that sets up a personalized development environment on Arch Linux with Hyprland, focused on productivity and efficiency.',
    href: undefined as string | undefined,
  },
  {
    name: 'nico-bot',
    tag: 'Discord bot',
    description:
      'A Discord bot with utilities and AI-powered features for STEM communities, including chat interactions, math problem solving, and educational resources.',
    href: undefined as string | undefined,
  },
];

export const skills = [
  { group: 'Build', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Design', items: ['Figma', 'Typography', 'Layout'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'Vercel', 'Arch Linux', 'Hyprland'] },
];

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
