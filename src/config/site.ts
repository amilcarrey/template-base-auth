export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'AR',
  description: 'A tailored Next.js created by @amilcarrey',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Login',
      href: '/login',
    },
  ],
  links: {
    twitter: 'https://twitter.com/amilcarrey',
    github: 'https://github.com/amilcarrey',
  },
}
