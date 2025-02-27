const path = require('path');
const contentConfigs = require('./contentPlugins');
const { create_doc_plugin, globStatic } = require('../src/utils/config');

module.exports = async () => {
  const contentPlugins = await Promise.all(
    (
      await contentConfigs()
    ).map(async (contentConfig) => await create_doc_plugin(contentConfig)),
  );

  const staticDirs = await globStatic('/docs/**/static/', __dirname);

  return {
    title: 'IOTA Wiki',
    tagline: 'The complete reference for IOTA',
    baseUrl: '/',
    themeConfig: {
      announcementBar: {
        id: 'govern',
        content:
          'If you would like to get more involved in the future governance of Shimmer, IOTA, and the Assembly network, join the discussions with the community in our <a target="_blank" href="https://govern.iota.org">governance forum</a> 🏛️',
        backgroundColor: '#5991c7',
        textColor: '#ffffff',
        isCloseable: true,
      },
      image: 'img/iota-wiki.png',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'IOTA Wiki Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            label: 'Use IOTA',
            to: '/use/wallets/what-is-a-wallet',
            activeBaseRegex: '^(/[^/]+)?/use/.*',
          },
          {
            label: 'Learn',
            to: '/learn/about-iota/an-introduction-to-iota',
            activeBaseRegex:
              '^(/[^/]+)?/learn/.*|' +
              '^(/[^/]+)?/IOTA-2.0-Research-Specifications/.*|' +
              '^(/[^/]+)?/goshimmer/.*',
          },
          {
            label: 'Develop',
            to: '/develop/welcome',
            activeBaseRegex:
              '^(/[^/]+)?/develop.*|' +
              '^(/[^/]+)?/identity.rs/.*|' +
              '^(/[^/]+)?/iota.rs/.*|' +
              '^(/[^/]+)?/wallet.rs/.*|' +
              '^(/[^/]+)?/streams/.*|' +
              '^(/[^/]+)?/stronghold.rs/.*|' +
              '^(/[^/]+)?/hornet/.*|' +
              '^(/[^/]+)?/chronicle/.*|' +
              '^(/[^/]+)?/introduction/.*|' +
              '^(/[^/]+)?/integration-services/.*|' +
              '^(/[^/]+)?/tutorials*',
          },
          {
            label: 'Community',
            to: '/community/the-community/discord',
            activeBaseRegex: '^(/[^/]+)?/community/.*',
          },
          {
            type: 'custom-network-dropdown',
            position: 'right',
            label: 'IOTA',
            items: [
              {
                label: 'Shimmer',
                routeBasePath: '/shimmer/',
              },
              {
                label: 'Next',
                routeBasePath: '/next/',
              },
            ],
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Use',
            items: [
              {
                label: 'Wallets',
                to: '/use/wallets/what-is-a-wallet',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'How It Works',
                to: '/learn/about-iota/an-introduction-to-iota',
              },
              {
                label: 'IOTA Token',
                to: '/learn/iota-token/buying-iota',
              },
              {
                label: 'Research',
                to: '/learn/research/research-outline',
              },
              {
                label: 'Glossary',
                to: '/learn/glossary',
              },
              {
                label: 'FAQs',
                to: '/learn/faqs',
              },
            ],
          },
          {
            title: 'Develop',
            items: [
              {
                label: 'Nodes',
                to: '/develop/nodes/about-nodes',
              },
              {
                label: 'Chronicle',
                href: '/chronicle/welcome',
              },
              {
                label: 'Tutorials',
                href: '/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Funding',
                to: '/community/funding/edf-funding',
              },
              {
                label: 'The Community',
                to: '/community/the-community/how-to-support',
              },
              {
                label: 'Research',
                to: '/community/research/research-outline',
              },
              {
                label: 'Contribute To Wiki',
                to: '/community/contribute-to-wiki/welcome',
              },
            ],
          },
        ],
        logo: {
          alt: 'IOTA Logo',
          src: 'img/footer_logo.svg',
          href: 'https://www.iota.org',
        },
        copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus. <a href="/cookie-policy"> Cookie Policy. </a>`,
      },
      socials: [
        {
          url: 'https://www.youtube.com/c/iotafoundation',
          backgroundColor: 'var(--ifm-color-gray-900)',
        },
        {
          url: 'https://www.github.com/iotaledger/',
          backgroundColor: '#2C3850',
        },
        {
          url: 'https://discord.iota.org/',
          backgroundColor: '#4B576F',
        },
        {
          url: 'https://www.twitter.com/iota/',
          backgroundColor: '#6A768E',
        },
        {
          url: 'https://www.reddit.com/r/iota/',
          backgroundColor: '#7D89A1',
        },
        {
          url: 'https://www.linkedin.com/company/iotafoundation/',
          backgroundColor: '#8995AD',
        },
        {
          url: 'https://www.instagram.com/iotafoundation/',
          backgroundColor: '#99A5BD',
        },
      ],
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: false,
          blog: false,
          theme: {
            customCss: require.resolve('../src/iota/css/custom.css'),
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          pages: {
            path: path.resolve(__dirname, '../src/iota/pages'),
          },
        },
      ],
    ],
    plugins: [
      ...contentPlugins,
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: 'openapi',
          docsPluginId: 'develop', // e.g. "classic" or the plugin-content-docs id
          config: {
            rest_api: {
              specPath:
                'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0013/rest-api.yaml',
              outputDir: path.resolve(__dirname, 'develop/nodes/rest-api'),
              sidebarOptions: {
                groupPathsBy: 'tag',
              },
            },
          },
        },
      ],
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    staticDirectories: [...staticDirs],
  };
};
