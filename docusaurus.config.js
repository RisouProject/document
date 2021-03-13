/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Risou Document',
  tagline: '理想サーバーに関わるドキュメント',
  url: 'https://risouproject.github.io',
  baseUrl: '/document/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RisouProject', // Usually your GitHub org/user name.
  projectName: 'document', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Risou Document',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'ドキュメント',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/q8u3UaNej4',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/RisouProject/document',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Risou Project. Built with Docusaurus.`,
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
            'https://github.com/RisouProject/document/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/RisouProject/document/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
