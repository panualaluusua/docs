// HUOM! Tämä tiedosto on automaattisesti generoitu. Älä muokkaa sitä suoraan.
// Muokkaa sen sijaan generate-config.js -skriptiä ja aja se uudelleen.
module.exports = {
  title: 'Dynaamisesti Generoitu Sivusto',
  tagline: 'Dokumentaatiota useista lähteistä',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'testuser',
  projectName: 'testproject',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
  "path": "content/minidocs",
  "routeBasePath": "minidocs",
  "sidebarPath": require.resolve('./content/minidocs/sidebars.js'),
  "disableVersioning": true
},
        blog: false, // Blogi poistettu käytöstä
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    ...[
  [
    "@docusaurus/plugin-content-docs",
    {
      "id": "projekti1",
      "path": "content/projekti1",
      "routeBasePath": "projekti1",
      "sidebarPath": require.resolve('./content/projekti1/sidebars.js'),
      "disableVersioning": true
    }
  ]
]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pääsivusto',
        logo: {
          alt: 'Sivuston Logo',
          src: 'img/logo.svg',
          href: '/minidocs/',
        },
        items: [
  {
    "type": "docSidebar",
    "sidebarId": "minidocsSidebar",
    "position": "left",
    "label": "Minidocs"
  },
  {
    "type": "docSidebar",
    "sidebarId": "projekti1Sidebar",
    "docsPluginId": "projekti1",
    "position": "left",
    "label": "Projekti1"
  }
],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright 2025 Oma Projekti. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};