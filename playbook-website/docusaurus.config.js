const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Guia de Boas Práticas para Bioinformática',
  tagline: 'Desenvolvimento de Pipelines no Varstation',
  url: 'https://varstation.github.io/',
  baseUrl: '/bioinfo-playbook/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'varstation', // Usually your GitHub org/user name.
  projectName: 'bioinfo-playbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Guidelines Bioinformática',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'right',
          label: 'Documentação',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/varstation/bioinfo-playbook',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Comece agora',
              to: '/docs/get-started',
            },
          ],
        },
        {
          title: 'Nossas Diretrizes',
          items: [
            {
              label: 'Como contribuir',
              href: '/docs/contribution/README',
            },
            {
              label: 'Privacidade',
              href: '/privacy',
            },
          ],
        },
        {
          title: 'Extras',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Changelogs',
              to: 'https://github.com/varstation/bioinfo-playbook/releases',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/varstation/bioinfo-playbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Varstation & Hospital Israelita Albert Einstein, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/varstation/bioinfo-playbook/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/varstation/bioinfo-playbook/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
