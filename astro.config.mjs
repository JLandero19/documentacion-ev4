// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Software eV4',
			logo: {
				src: './src/assets/logo-ev4.webp',
			},
			sidebar: [
				{
					label: 'Primeros pasos',
					translations: {
						en: 'First Steps',
					},
					collapsed: true,
					autogenerate: {
						directory: 'primerospasos',
						collapsed: true,
					},
				},
				{
					label: 'Tips',
					translations: {
						en: 'Tips',
					},
					collapsed: true,
					autogenerate: { directory: 'tips' },
				},
				{
					label: 'Tu empresa',
					translations: {
						en: 'Your company',
					},
					collapsed: true,
					autogenerate: { directory: 'tuempresa' },
				},
				{
					label: 'Como importar mis datos',
					translations: {
						en: 'How to import my data',
					},
					collapsed: true,
					autogenerate: { directory: 'importardatos' },
				},
				{
					label: 'Mi primer presupuesto',
					translations: {
						en: 'My first budget',
					},
					collapsed: true,
					autogenerate: { directory: 'primerpresupuesto' },
				},
				{
					label: 'Mi primera factura',
					translations: {
						en: 'My first invoice',
					},
					collapsed: true,
					autogenerate: { directory: 'primerafactura' },
				},
				{
					label: 'Bancos',
					translations: {
						en: 'Banks',
					},
					collapsed: true,
					autogenerate: { directory: 'bancos' },
				},
				{
					label: 'Articulos',
					translations: {
						en: 'Articles',
					},
					collapsed: true,
					autogenerate: { directory: 'articulos' },
				},
				{
					label: 'Contabilidad',
					translations: {
						en: 'Accounting',
					},
					collapsed: true,
					autogenerate: { directory: 'contabilidad' },
				},
			],
			defaultLocale: "root",
			locales: {
				root: { label: "Español", lang: "es" },
				en: { label: "English", lang: "en" },
			},			
		}),
	],
});