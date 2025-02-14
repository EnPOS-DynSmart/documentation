// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DynSmart',
  tagline: 'Perakende için ERP.',
  favicon: 'img/anasayfa/dynsmart-logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EnPOS-DynSmart', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebarPath: './sidebars.js',
          sidebarPath: require.resolve('./sidebars.js'),

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          //customCss: './src/css/custom.css',
          customCss: require.resolve('./src/css/custom.css'),

        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/anasayfa/dynsmart-logo-white.png',
      navbar: {
        title: 'DynSmart',
        logo: {
          alt: 'DynSmart Logo',
          src: 'img/anasayfa/dynsmart-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokümantasyon',
          },

          { to: 'docs/products/intro', label: 'EnPOS Donanımları', position: 'left' },
          { to: 'docs/software/intro', label: 'EnPOS Yazılımları', position: 'left' },
          
          {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://dynsmart.com',
            label: 'DynSmart.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Donanım Çözümlerimiz',
            items: [
              {
                label: 'YN500',
                href: '/docs/products/YN500' ,
              },
              {
                label: 'YN101',
                href: '/docs/products/yn101/',
              },
              {
                label: 'YN100',
                href: '/docs/products/yn100/',
              },
              {
                label: 'YN200',
                href: '/docs/products/yn200/',
              },
              {
                label: 'N-POS Pro',
                href: '/docs/products/NPOS-Pro/',
              },
              {
                label: 'N-POS Max',
                href: '/docs/products/NPOS-Max/',
              },

            ],
          },
          {
            title: 'Yazılım Çözümlerimiz',
            items: [
              {
                label: 'DynSmart',
                href: '/docs/software/dynsmart/',
              },
              {
                label: 'DynMaster',
                href: '/docs/software/dynmaster/',
              },
              {
                label: 'DynFlex',
                href: '/docs/software/dynflex/',
              },
              {
                label: 'DynCash',
                href: '/docs/software/dyncash/',
              },
              {
                label: 'DynKitchen',
                href: '/docs/software/dynkitchen/',
              },
              {
                label: 'ISS',
                href: '/docs/software/iss/',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [
              {
                label: 'X',
                href: 'https://x.com/EnPOS_as',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/enpos_as/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@enposas3355/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/enpos.as/',
              },
              {
                label: 'LinkedIn',
                href: 'https://tr.linkedin.com/company/enposbilisim',
              },
            ],
          },
          {
            title: 'İletişim',
            items: [
              {
                html: 'Yamanevler Mahallesi Ömer Faik Atakan Caddesi No:3 Yılmaz Plaza Kat:3 34768',
              },
              {
                html: '<strong>Ümraniye / İstanbul</strong>'
              },
              {
                label: 'info@enpos.com.tr',
                href: 'mailto: info@enpos.com.tr',
              },
            ],
          },
        ],
        copyright: `Tüm Hakları Saklıdır © ${new Date().getFullYear()} EnPOS Bilişim A.Ş.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
