[한글](README.md) | [English](README_en.md)

# RealGrid2 Typescript + Webpack 예제

> 이 예제에는 `localhost` 도메인에서 실행 할 수 있는 개발용 라이선스를 포함하고 있습니다.
> localhost 이외의 도메인에 대한 개발용 라이선스는 http://service.realgrid.com/start 에서 받을 수 있습니다.

## 설치

```sh
git clone https://github.com/realgrid/realgrid2-examples.git
cd realgrid2-examples/typescript-webpack
npm install
```

## 빌드 명령

```bash
# bundle file build
npm run build

# ...as watch mode
npm run watch

# remove `dist` directory
npm run clean
```

## 테스트

> [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 를 사용합니다.

RealGrid2는 도메인 라이선스를 채택하고 있습니다. 브라우저에서 번들된 js 파일을 포함한 index.html 파일만 열어서는 라이선스 관련 오류를 만나게 됩니다. 별도의 라이선스 설정없이 웹 브라우저 환경을 직접 테스트 해보고 싶다면 아래처럼 실행합니다.

```bash
npm run dev
```

브라우저에서 주소에 `http://localhost:9000`를 입력하고 RealGrid2가 포함된 화면을 확인하세요.