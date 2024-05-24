import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cdm2024/__docusaurus/debug',
    component: ComponentCreator('/cdm2024/__docusaurus/debug', '524'),
    exact: true
  },
  {
    path: '/cdm2024/__docusaurus/debug/config',
    component: ComponentCreator('/cdm2024/__docusaurus/debug/config', 'a56'),
    exact: true
  },
  {
    path: '/cdm2024/__docusaurus/debug/content',
    component: ComponentCreator('/cdm2024/__docusaurus/debug/content', '3fb'),
    exact: true
  },
  {
    path: '/cdm2024/__docusaurus/debug/globalData',
    component: ComponentCreator('/cdm2024/__docusaurus/debug/globalData', '5fb'),
    exact: true
  },
  {
    path: '/cdm2024/__docusaurus/debug/metadata',
    component: ComponentCreator('/cdm2024/__docusaurus/debug/metadata', '031'),
    exact: true
  },
  {
    path: '/cdm2024/__docusaurus/debug/registry',
    component: ComponentCreator('/cdm2024/__docusaurus/debug/registry', '5dd'),
    exact: true
  },
  {
    path: '/cdm2024/__docusaurus/debug/routes',
    component: ComponentCreator('/cdm2024/__docusaurus/debug/routes', '1df'),
    exact: true
  },
  {
    path: '/cdm2024/blog',
    component: ComponentCreator('/cdm2024/blog', '98d'),
    exact: true
  },
  {
    path: '/cdm2024/blog/archive',
    component: ComponentCreator('/cdm2024/blog/archive', '8d5'),
    exact: true
  },
  {
    path: '/cdm2024/blog/first-blog-post',
    component: ComponentCreator('/cdm2024/blog/first-blog-post', '1f1'),
    exact: true
  },
  {
    path: '/cdm2024/blog/long-blog-post',
    component: ComponentCreator('/cdm2024/blog/long-blog-post', 'a80'),
    exact: true
  },
  {
    path: '/cdm2024/blog/mdx-blog-post',
    component: ComponentCreator('/cdm2024/blog/mdx-blog-post', '805'),
    exact: true
  },
  {
    path: '/cdm2024/blog/tags',
    component: ComponentCreator('/cdm2024/blog/tags', '334'),
    exact: true
  },
  {
    path: '/cdm2024/blog/tags/docusaurus',
    component: ComponentCreator('/cdm2024/blog/tags/docusaurus', '958'),
    exact: true
  },
  {
    path: '/cdm2024/blog/tags/facebook',
    component: ComponentCreator('/cdm2024/blog/tags/facebook', 'b5b'),
    exact: true
  },
  {
    path: '/cdm2024/blog/tags/hello',
    component: ComponentCreator('/cdm2024/blog/tags/hello', 'a0d'),
    exact: true
  },
  {
    path: '/cdm2024/blog/tags/hola',
    component: ComponentCreator('/cdm2024/blog/tags/hola', '1c9'),
    exact: true
  },
  {
    path: '/cdm2024/blog/welcome',
    component: ComponentCreator('/cdm2024/blog/welcome', '8b8'),
    exact: true
  },
  {
    path: '/cdm2024/markdown-page',
    component: ComponentCreator('/cdm2024/markdown-page', 'ba1'),
    exact: true
  },
  {
    path: '/cdm2024/docs',
    component: ComponentCreator('/cdm2024/docs', '5d3'),
    routes: [
      {
        path: '/cdm2024/docs',
        component: ComponentCreator('/cdm2024/docs', '6ab'),
        routes: [
          {
            path: '/cdm2024/docs',
            component: ComponentCreator('/cdm2024/docs', '620'),
            routes: [
              {
                path: '/cdm2024/docs/category/chat',
                component: ComponentCreator('/cdm2024/docs/category/chat', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/category/video',
                component: ComponentCreator('/cdm2024/docs/category/video', 'e9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/changelog',
                component: ComponentCreator('/cdm2024/docs/changelog', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/channel',
                component: ComponentCreator('/cdm2024/docs/chatSDK/channel', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/channels',
                component: ComponentCreator('/cdm2024/docs/chatSDK/channels', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/chatChangelog',
                component: ComponentCreator('/cdm2024/docs/chatSDK/chatChangelog', '167'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/logout',
                component: ComponentCreator('/cdm2024/docs/chatSDK/logout', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/loigin',
                component: ComponentCreator('/cdm2024/docs/chatSDK/loigin', 'dcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/messages',
                component: ComponentCreator('/cdm2024/docs/chatSDK/messages', 'e02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/chatSDK/profile',
                component: ComponentCreator('/cdm2024/docs/chatSDK/profile', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/errors',
                component: ComponentCreator('/cdm2024/docs/errors', '8f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/init',
                component: ComponentCreator('/cdm2024/docs/init', '2e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/intro',
                component: ComponentCreator('/cdm2024/docs/intro', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/videoSDK/login',
                component: ComponentCreator('/cdm2024/docs/videoSDK/login', '7c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/videoSDK/logout',
                component: ComponentCreator('/cdm2024/docs/videoSDK/logout', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/videoSDK/retrieveAccessToken',
                component: ComponentCreator('/cdm2024/docs/videoSDK/retrieveAccessToken', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/videoSDK/setup',
                component: ComponentCreator('/cdm2024/docs/videoSDK/setup', '351'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/videoSDK/usage',
                component: ComponentCreator('/cdm2024/docs/videoSDK/usage', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cdm2024/docs/videoSDK/videoChangelog',
                component: ComponentCreator('/cdm2024/docs/videoSDK/videoChangelog', '83e'),
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
    path: '/cdm2024/',
    component: ComponentCreator('/cdm2024/', 'b90'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
