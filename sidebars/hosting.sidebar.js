// @ts-nocheck

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const hostingSidebar = [
  {
    type: 'doc',
    id: 'hosting/index',
    label: 'Introduction',
  },
  {
    type: 'category',
    label: 'Install',
    collapsed: true,
    link: { type: 'doc', id: 'hosting/install' },
    items: [{ type: 'autogenerated', dirName: 'hosting/install' }],
  },
  {
    type: 'category',
    label: 'Configure',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/configure' },
    items: [{ type: 'autogenerated', dirName: 'hosting/configure' }],
  },
  {
    type: 'category',
    label: 'Update',
    collapsed: true,
    link: { type: 'doc', id: 'hosting/update' },
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
    collapsible: false,
    link: { type: 'generated-index', slug: 'hosting/faq' },
    items: [{ type: 'autogenerated', dirName: 'hosting/faq' }],
  },
];
module.exports = hostingSidebar;
