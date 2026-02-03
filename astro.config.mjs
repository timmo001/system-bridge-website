// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'System Bridge',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/timmo001/system-bridge' },
			],
			sidebar: [
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
