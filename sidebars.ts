import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: 'category',
      label: 'Routes',
      link: {
        type: 'generated-index',
        title: 'Routes',
        description: 'Learn about the Free Tallinn Running Tour routes!',
        slug: '/routes',
        keywords: ['routes', 'running', 'tallinn', 'tours', 'free'],
      },
      items: ['routes/the-classic', 'routes/eastbound-and-down', 'routes/hit-the-trails', 'routes/the-big-loop', 'routes/custom-adventure', 'routes/private-group'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;