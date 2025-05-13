import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '0a0'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '5b8'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '960'),
            routes: [
              {
                path: '/docs/docs/projekti1/docs/',
                component: ComponentCreator('/docs/docs/projekti1/docs/', '501'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/docs/projekti1/docs/architecture',
                component: ComponentCreator('/docs/docs/projekti1/docs/architecture', 'a84'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/docs/projekti1/docs/changelog',
                component: ComponentCreator('/docs/docs/projekti1/docs/changelog', 'cb7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/docs/projekti1/docs/projektinblueprint',
                component: ComponentCreator('/docs/docs/projekti1/docs/projektinblueprint', 'b5b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/docs/projekti1/docs/video_demo_material',
                component: ComponentCreator('/docs/docs/projekti1/docs/video_demo_material', '418'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/docs/projekti1/docs/vision',
                component: ComponentCreator('/docs/docs/projekti1/docs/vision', '11c'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/projekti1',
    component: ComponentCreator('/docs/projekti1', '4e3'),
    routes: [
      {
        path: '/docs/projekti1',
        component: ComponentCreator('/docs/projekti1', '821'),
        routes: [
          {
            path: '/docs/projekti1',
            component: ComponentCreator('/docs/projekti1', '971'),
            routes: [
              {
                path: '/docs/projekti1/docs/',
                component: ComponentCreator('/docs/projekti1/docs/', '525'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/projekti1/docs/architecture',
                component: ComponentCreator('/docs/projekti1/docs/architecture', 'f2d'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/projekti1/docs/changelog',
                component: ComponentCreator('/docs/projekti1/docs/changelog', 'da1'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/projekti1/docs/projektinblueprint',
                component: ComponentCreator('/docs/projekti1/docs/projektinblueprint', 'c7a'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/projekti1/docs/video_demo_material',
                component: ComponentCreator('/docs/projekti1/docs/video_demo_material', '974'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/projekti1/docs/vision',
                component: ComponentCreator('/docs/projekti1/docs/vision', '726'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
