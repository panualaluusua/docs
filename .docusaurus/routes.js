import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/minidocs',
    component: ComponentCreator('/minidocs', '62e'),
    routes: [
      {
        path: '/minidocs',
        component: ComponentCreator('/minidocs', '44f'),
        routes: [
          {
            path: '/minidocs',
            component: ComponentCreator('/minidocs', '26e'),
            routes: [
              {
                path: '/minidocs/aloitus',
                component: ComponentCreator('/minidocs/aloitus', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
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
