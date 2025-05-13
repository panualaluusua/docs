module.exports = {
  title: 'Panun Dokumentaatio',
  url: 'https://panualaluusua.fi',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'panualaluusua',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'Panun Dokumentaatio',
      logo: {
        alt: 'Panun Dokumentaatio logo',
        src: 'img/logo.svg',
        href: 'docs/',
      },
      items: [
  {
    "to": "/projekti1/",
    "label": "projekti1",
    "position": "left"
  }
],
    },
    footer: {
      style: 'dark',
      copyright: "Copyright © " + new Date().getFullYear() + " Panu Alaluusua",
    },
  },
  plugins: [
  [
    "@docusaurus/plugin-content-docs",
    {
      "id": "projekti1",
      "path": "docs/projekti1",
      "routeBasePath": "projekti1",
      "sidebarPath": "C:\\Users\\panua\\projektit\\docs\\docs\\projekti1\\sidebars.js"
    }
  ]
],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
