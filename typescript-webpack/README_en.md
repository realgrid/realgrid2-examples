[한글](README.md) | [English](README_en.md)

# RealGrid2 Typescript + Webpack Example

> This Example includes the license for the development build that allows users to access `localhost`
> You can request the licene for the development build that can be applied to the other domain names. Visit: https://service.realgrid.com/start

## Quick Start

```sh
git clone https://github.com/realgrid/realgrid2-examples.git
cd realgrid2-examples/typescript-webpack
npm install
npm run dev
```

## Build

```bash
# bundle file build
npm run build

# ...as watch mode
npm run watch

# remove `dist` directory
npm run clean
```

## 테스트

> Via [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 

RealGrid2 is licensed under the domain license policy. You cannot access RealGrid2 at `index.html` that includes only the javascript bundle. (You will face with an error).

For convenient use, run the scripts:

```bash
npm run dev
```

Then, you can watch at `http://localhost:9001` by default!