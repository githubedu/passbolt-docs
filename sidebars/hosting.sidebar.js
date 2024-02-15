// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const hostingSidebar = [
  {
    type: 'category',
    label: 'Install',
    collapsed: true,
    link: { type: 'doc', id: 'hosting/install' },
    items: [{ type: 'autogenerated', dirName: 'hosting/install' }],
  },
  {
    type: 'category',
    label: 'Update',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/update' },
    items: [{ type: 'autogenerated', dirName: 'hosting/update' }],
  },
  {
    type: 'category',
    label: 'Backup',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/backup' },
    items: [{ type: 'autogenerated', dirName: 'hosting/backup' }],
  },
  {
    type: 'category',
    label: 'Upgrade to PRO',
    collapsed: true,
    link: { type: 'doc', id: 'hosting/upgrade' },
    items: [{ type: 'autogenerated', dirName: 'hosting/upgrade' }],
  },
  {
    type: 'category',
    label: 'Migrate',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/migrate' },
    items: [{ type: 'autogenerated', dirName: 'hosting/migrate' }],
  },
  {
    type: 'category',
    label: 'Troubleshooting',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/troubleshooting' },
    items: [{ type: 'autogenerated', dirName: 'hosting/troubleshooting' }],
  },
  {
    type: 'category',
    label: 'FAQ',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/faq' },
    items: [{ type: 'autogenerated', dirName: 'hosting/faq' }],
  },
  {
    type: 'category',
    label: 'How To Guides',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/how-to' },
    items: [{ type: 'autogenerated', dirName: 'hosting/how-to' }],
  },
];
module.exports = hostingSidebar;
