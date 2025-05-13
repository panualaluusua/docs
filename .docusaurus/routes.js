import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', 'ffe'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', 'fc8'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '397'),
            routes: [
              {
                path: '/docs/docs/projekti1/docs/dokumentti',
                component: ComponentCreator('/docs/docs/projekti1/docs/dokumentti', 'e66'),
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
    component: ComponentCreator('/docs/projekti1', '407'),
    routes: [
      {
        path: '/docs/projekti1',
        component: ComponentCreator('/docs/projekti1', 'a04'),
        routes: [
          {
            path: '/docs/projekti1',
            component: ComponentCreator('/docs/projekti1', '415'),
            routes: [
              {
                path: '/docs/projekti1/docs/dokumentti',
                component: ComponentCreator('/docs/projekti1/docs/dokumentti', '4db'),
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
