# portal

[![CI](https://github.com/OneKeyHQ/portal/actions/workflows/main.yml/badge.svg)](https://github.com/OneKeyHQ/portal/actions/workflows/main.yml)

## Framework

- [Gatsby](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/)

## Install

```
yarn install
```

## Development

```
yarn develop
```

## Build

### Production build

```
PUBLIC_URL=https://cdn.onekey.so
API_URL=https://fiat.onekeytest.com
```

```
yarn run build:cdn
```

### Normal build

```
yarn run build
```

## Auto Generate Icon Components

`src/component/base/icon`

```
yarn run icon
```

## Generate i18n files

```
yarn run lokalise
```
