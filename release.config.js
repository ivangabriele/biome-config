import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const base = require('@ivangabriele/semantic-release-config-base')

export default {
  ...base,
  failComment: false,
  failTitle: false,
  plugins: [
    ...base.plugins,
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        // biome-ignore lint/suspicious/noTemplateCurlyInString: semantic-release template syntax
        message: 'ci(release): v${nextRelease.version} [skip ci]',
      },
    ],
  ],
}
