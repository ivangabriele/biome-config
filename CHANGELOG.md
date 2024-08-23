## [1.5.0](https://github.com/ivangabriele/biome-config/compare/v1.4.0...v1.5.0) (2024-08-23)


### Features

* set javascript.formatter.arrowParentheses to asNeeded ([08e85cb](https://github.com/ivangabriele/biome-config/commit/08e85cbad634e84a4b4372b5947dee9e16cbefd3))

## [1.4.0](https://github.com/ivangabriele/biome-config/compare/v1.3.0...v1.4.0) (2024-08-21)


### Features

* disable linter/style/useNamingConvention rule for constants & typings ([24d951f](https://github.com/ivangabriele/biome-config/commit/24d951f63f22971d43761f9f77360601fa430a9a))


### Bug Fixes

* exclude via .gitinore file rather than via opinionated list ([8997c0f](https://github.com/ivangabriele/biome-config/commit/8997c0fcf4dd0305bb8cd4cec7dcbf0309c69013))

## [1.3.0](https://github.com/ivangabriele/biome-config/compare/v1.2.0...v1.3.0) (2024-08-19)


### Features

* add Jest globals in javascript.globals ([d2eac6e](https://github.com/ivangabriele/biome-config/commit/d2eac6e11b320933c5911406e66214b26c6930bf))
* enable files.ignoreUnknown flag ([39770d3](https://github.com/ivangabriele/biome-config/commit/39770d3349b8f9a415141e1b79bcf793c598880d))
* include more extensions for config files override ([6068920](https://github.com/ivangabriele/biome-config/commit/6068920238e2d1c84c645a8c56728b0b11dbbcca))
* set javascript.formatter.trailingComma to all ([2dc3f48](https://github.com/ivangabriele/biome-config/commit/2dc3f480f4532957bd79dd5cb3f19f6a6cd6151d))


### Build System

* **dev-deps:** update all non-major dependencies ([#11](https://github.com/ivangabriele/biome-config/issues/11)) ([a1cf91c](https://github.com/ivangabriele/biome-config/commit/a1cf91cda8fae11eea7413402b1e986d4fe20c1f))

## [1.2.0](https://github.com/ivangabriele/biome-config/compare/v1.1.0...v1.2.0) (2024-08-14)


### Features

* disable lint/correctness/noNodejsModules rule ([f9777cf](https://github.com/ivangabriele/biome-config/commit/f9777cf562ea61d7a808a2b0e3360a34af105d4a))


### Documentation

* **readme:** fix typo ([1a9fa5e](https://github.com/ivangabriele/biome-config/commit/1a9fa5e7be6a48a4e1fe99a1e53eace8a9b694f0))


### Build System

* **dev-deps:** update dependency husky to v9.1.4 ([#10](https://github.com/ivangabriele/biome-config/issues/10)) ([bf159f5](https://github.com/ivangabriele/biome-config/commit/bf159f5b37439d840a27f635d9d534739856c544))

## [1.1.0](https://github.com/ivangabriele/biome-config/compare/v1.0.2...v1.1.0) (2024-07-27)


### Features

* disable noDefaultExport rule for app/ and config files ([ae08336](https://github.com/ivangabriele/biome-config/commit/ae08336d34f2a9c1ec1c8cfda5ce744b1b563424))
* disable noImplicitBoolean rule ([6dfb162](https://github.com/ivangabriele/biome-config/commit/6dfb162ab286b2a5b6358c326b5b48cc60b55cd1))
* disable noNamespace rule ([ce67c8a](https://github.com/ivangabriele/biome-config/commit/ce67c8a9ea16a496bcf7dc7e6329e0bcb89020be))
* ignore .next/ directory ([2f10d0b](https://github.com/ivangabriele/biome-config/commit/2f10d0bd979abe734f2168dddf59f3d9bbe3cc01))
* set quoteStyle to single ([4ac1eca](https://github.com/ivangabriele/biome-config/commit/4ac1ecac324f880841e9410b3647f2358f9e572f))
* setup formatter indent style, width & line width ([ed66b58](https://github.com/ivangabriele/biome-config/commit/ed66b582be657da26d0d98678205a4905e7ee883))


### Bug Fixes

* ignore package.json ([47a9c3a](https://github.com/ivangabriele/biome-config/commit/47a9c3a2e32f87af356c8c8630210c813d7d6a47))
* remove root prefix from ignored directory patterns ([b720815](https://github.com/ivangabriele/biome-config/commit/b7208151faea336f1d94560a07a0d07d1e066936))


### Documentation

* **readme:** update VSCode recommended settings ([676b295](https://github.com/ivangabriele/biome-config/commit/676b29565435a11811989982fd85cbff98a6c2ff))


### Build System

* **deps:** bump braces from 3.0.2 to 3.0.3 ([#7](https://github.com/ivangabriele/biome-config/issues/7)) ([af3047c](https://github.com/ivangabriele/biome-config/commit/af3047cfc31b35d70a4ffc1e701d81779e02fa05))
* **deps:** bump tar from 6.2.0 to 6.2.1 ([#8](https://github.com/ivangabriele/biome-config/issues/8)) ([4feaa29](https://github.com/ivangabriele/biome-config/commit/4feaa297af39dc83558e65a7e5fb5074cd4b607a))
* **dev-deps:** resolve ip to v2.0.1 [CWE-918] ([f9c1ba9](https://github.com/ivangabriele/biome-config/commit/f9c1ba9fb51a8025ea4486f92e390a3e27ea971d))
* **dev-deps:** upgrade all dev dependencies ([fff4567](https://github.com/ivangabriele/biome-config/commit/fff456748201a04b5c676eef93ef15e088365a8b))
* **yarn:** upgrade to v4.3.1 ([99f7015](https://github.com/ivangabriele/biome-config/commit/99f7015acc78ae08acf34a20ad6e332b1acfb0e2))

## [1.0.2](https://github.com/ivangabriele/biome-config/compare/v1.0.1...v1.0.2) (2024-06-10)


### Bug Fixes

* **npm:** add missing package export ([c6c74b2](https://github.com/ivangabriele/biome-config/commit/c6c74b2830e0f6f9ae8b463b263cc9f85e11f485))


### Documentation

* **changelog:** restore missing v1.0.0 section ([566d20e](https://github.com/ivangabriele/biome-config/commit/566d20ea5f7c57d9939f7fb49b4f30e67d4181be))

## [1.0.1](https://github.com/ivangabriele/biome-config/compare/v1.0.0...v1.0.1) (2024-06-10)


### Documentation

* **readme:** add VSCode instructions ([e96a587](https://github.com/ivangabriele/biome-config/commit/e96a587abcdfe0af2fe65eab83f9ca65860ac8c4))

## 1.0.0 (2024-06-10)


### Features

* initialize project ([96af979](https://github.com/ivangabriele/biome-config/commit/96af9794f0ac7fc623c83dcdc6a47cb014a09dc4))


### Documentation

* **readme:** add missing dep in usage ([918cd0b](https://github.com/ivangabriele/biome-config/commit/918cd0b2afea2867aa07e487574ceba855254853))


### Build System

* **npm:** fix npm ignore exception path ([c9a7b42](https://github.com/ivangabriele/biome-config/commit/c9a7b426e8faa5aff1f8bc2c36efe1adb47f6185))
