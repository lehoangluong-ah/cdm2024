import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fb9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b92'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9bf'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4d4'),
            routes: [
              {
                path: '/docs/category/chat',
                component: ComponentCreator('/docs/category/chat', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/video',
                component: ComponentCreator('/docs/category/video', '481'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/changelog',
                component: ComponentCreator('/docs/changelog', 'a62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chatSDK/chatChangelog',
                component: ComponentCreator('/docs/chatSDK/chatChangelog', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/errors',
                component: ComponentCreator('/docs/errors', '065'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/init',
                component: ComponentCreator('/docs/init', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/videoSDK/videoChangelog',
                component: ComponentCreator('/docs/videoSDK/videoChangelog', 'a5b'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
