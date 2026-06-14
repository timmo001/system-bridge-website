// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://system-bridge.timmo.dev',
  // Old site served docs under /docs/*. Keep those URLs working after the
  // Starlight migration moved pages to the site root.
  redirects: {
    '/docs/install': '/install',
    '/docs/running': '/running',
    '/docs/cli': '/cli',
    '/docs/faq': '/faq',
    '/docs/api/data': '/api/data',
    '/docs/api/media-file-data': '/api/media-file-data',
    '/docs/websocket/data-get': '/websocket/data-get',
    '/docs/websocket/data-register-listener': '/websocket/data-register-listener',
    '/docs/websocket/data-receive': '/websocket/data-receive',
    '/docs/websocket/exit-application': '/websocket/exit-application',
    '/docs/websocket/keyboard-keypress': '/websocket/keyboard-keypress',
    '/docs/websocket/keyboard-text': '/websocket/keyboard-text',
    '/docs/websocket/media-control': '/websocket/media-control',
    '/docs/websocket/notification': '/websocket/notification',
    '/docs/websocket/open-path': '/websocket/open-path',
    '/docs/websocket/open-url': '/websocket/open-url',
    '/docs/websocket/power-control': '/websocket/power-control',
  },
  integrations: [
    icon(),
    sitemap(),
    starlight({
      title: 'System Bridge',
      favicon: '/system-bridge.svg',
      customCss: ['./src/styles/starlight.css', './src/styles/landing.css'],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://system-bridge.timmo.dev/social.jpg' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '2560' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '1440' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://system-bridge.timmo.dev/social.jpg' },
        },
      ],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
        Footer: './src/components/Footer.astro',
        PageFrame: './src/components/PageFrame.astro',
      },
      social: [
        { icon: 'pencil', label: 'Website Repository', href: 'https://github.com/timmo001/system-bridge-website' },
        { icon: 'comment', label: 'Discussions', href: 'https://github.com/timmo001/system-bridge/discussions' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/timmo001/system-bridge' },
      ],
      sidebar: [
        { label: 'Overview', slug: 'overview' },
        {
          label: 'Getting Started',
          items: [
            { label: 'Install', slug: 'install' },
            { label: 'Running', slug: 'running' },
            { label: 'CLI', slug: 'cli' },
            { label: 'FAQ', slug: 'faq' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'Data', slug: 'api/data' },
            { label: 'Media File Data', slug: 'api/media-file-data' },
          ],
        },
        {
          label: 'WebSocket',
          items: [
            { label: 'Requesting Data', slug: 'websocket/data-get' },
            { label: 'Registering as a Listener', slug: 'websocket/data-register-listener' },
            { label: 'Receiving Data', slug: 'websocket/data-receive' },
            { label: 'Exit Application', slug: 'websocket/exit-application' },
            { label: 'Keyboard Keypress', slug: 'websocket/keyboard-keypress' },
            { label: 'Keyboard Text', slug: 'websocket/keyboard-text' },
            { label: 'Media Control', slug: 'websocket/media-control' },
            { label: 'Send Notification', slug: 'websocket/notification' },
            { label: 'Open Path', slug: 'websocket/open-path' },
            { label: 'Open URL', slug: 'websocket/open-url' },
            { label: 'Power Control', slug: 'websocket/power-control' },
          ],
        },
      ],
    }),
  ],
});
