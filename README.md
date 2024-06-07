# My Biome Configuration

[![License][img-license]][lnk-license] [![GitHub Check Workflow Status][img-github]][lnk-github]
[![NPM Version][img-npm]][lnk-npm]

My most commonly used [Biome](https://biomejs.dev) configuration.

---

- [Usage](#usage)
  - [Lint-Staged](#lint-staged)
- [Contribute](#contribute)

---

## Usage

Run:

```sh
yarn add -DE @biomejs/biome @ivangabriele/biome-config
```

Add this line to your `biome.jsonc`:

```jsonc
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@ivangabriele/biome-config/index.jsonc"],
}
```

Then add this line to your `package.json`:

```json
{
  "scripts": {
    "test:lint": "biome check --apply --files-ignore-unknown=true --no-errors-on-unmatched ."
  }
}
```

### Lint-Staged

Run:

```sh
yarn add -DE @ivangabriele/biome-config lint-staged
```

Then add this line to your `package.json`:

```json
{
  "lint-staged": {
    "*.{cjs,cts,d.cts,d.mts,d.ts,js,json,jsonc,jsx,mjs,mts,ts,tson,tsx}": ["yarn test:lint"]
  }
}
```

## Contribute

Please refer to the [contribution guidelines](./CONTRIBUTING.md) for information on how to contribute to this project.

---

[img-github]:
  https://img.shields.io/github/actions/workflow/status/ivangabriele/biome-config/check.yml?branch=main&label=CI&style=for-the-badge
[img-license]: https://img.shields.io/github/license/ivangabriele/biome-config?style=for-the-badge
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/biome-config?style=for-the-badge
[lnk-github]: https://github.com/ivangabriele/biome-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/biome-config/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/biome-config
