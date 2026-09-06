import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Watchtower',
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/ferelking242/watchtower',
        external: true,
      },
    ],
  };
}