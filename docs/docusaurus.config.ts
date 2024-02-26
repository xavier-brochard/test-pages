import type { Config } from '@docusaurus/types'
import type { PresetEntry } from 'redocusaurus'

const url = 'https://ge5kcw08xe.execute-api.eu-west-3.amazonaws.com' // Ultimately 'https://api.metamask-institutional.io'
const baseUrl = '/v1/docs/' // Ultimately ''

/**
 * @see https://github.com/rohit-gohri/redocusaurus
 */
const redocusaurus: PresetEntry = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'reference',
        spec: './node_modules/@codefi/mmi-openapi-arcanum/dist/apis/api-gateway/openapi.yaml',
        route: 'docs',
      },
    ],
    theme: {
      options: {
        pathInMiddlePanel: true,
        sortEnumValuesAlphabetically: true,
        sortOperationsAlphabetically: true,
        sortPropsAlphabetically: true,
        sortTagsAlphabetically: true,
        disableSearch: true,
      },
      /**
       * Highlight color for docs
       */
      primaryColor: '#2C56DD',
    },
  },
]

const config: Config = {
  title: 'MetaMask Institutional',
  tagline: 'Web API',
  url,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Consensys', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve('./src/custom.css')] },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl: undefined, // Remove the "edit this page" links.
        },
      },
    ],
    redocusaurus as any,
  ],
  themeConfig: {
    navbar: {
      title: 'MetaMask Institutional',
      logo: {
        alt: 'MetaMask Institutional Blue Fox Logo',
        src: 'img/logo192.png',
        href: 'docs',
      },
      items: [
        {
          label: 'Web API',
          position: 'left',
          type: 'doc',
          docId: 'docs',
        },
        {
          label: 'v1',
          position: 'right',
          items: [
            {
              label: 'v1',
              href: `${url}${baseUrl}/docs`,
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MetaMask Institutional',
          items: [
            {
              label: 'Website',
              href: 'https://metamask.io/institutions/',
            },
            {
              label: 'Portfolio Dashboard',
              href: 'https://metamask-institutional.io/',
            },
            {
              label: 'Web API',
              to: 'docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/MMInstitutional',
            },
          ],
        },
        {
          title: 'Contact us',
          items: [
            {
              label: 'Submit an issue',
              href: 'https://mmi-support.zendesk.com/hc/en-us/requests/new',
            },
            {
              label: 'Provide feedback',
              href: 'https://consensys-software.typeform.com/to/afkfqzzZ?typeform-source=metamask-institutional.io',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy policy',
              href: 'https://consensys.net/privacy-policy/', // @TODO Terms of use
            },
            {
              label: 'Terms and Conditions',
              href: 'https://metamask-institutional.io/terms-and-conditions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Consensys.`,
    },
  },
}

module.exports = config
