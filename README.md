# CRA Serverless App Hooks

## Description
Old habits still die hard! This project is the successor to [CRA Lambda App Hooks](https://gitlab.com/artavia/cra-lambda-app-hooks/ "link to CRA Lambda App Hooks repo") built in early 2020. A lot has changed with Netlify since then. Most conspicuously, ***netlify-lambda** is deprecated* and a lot of it's functionality has since migrated to netlify-cli.

### Processing and/or completion date(s)
October 30, 2023 and October 31, 2023

## How its different

**./src/setUpProxy.js** file is a thing so let me show you what that looks like:

```sh
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyCTX = '/.netlify/functions/';

const proxyMW = createProxyMiddleware(
  {
    target: 'http://localhost:8888',
  }
);

module.exports = (app) => {
  app.use(proxyCTX, proxyMW);
};

```

## How to run it
All the work has been done for you! 

You should, however, install the netlify-cli globally like so:
```sh
$ npm install -g netlify-cli@latest

```

Once you have downloaded and unpacked the compressed file, you will need to install the dependencies like so:
```sh
$ npm install

```

In order to run the dev-server you execute the following command (hit **ctrl+c** to quit):
```sh
$ npm run dev

```

Then, to generate a production build containing the lambda functions, execute the following:
```sh
$ npm run truebuild

```

Finally, to test the production folder, run the dev-server once more and execute the following (hit **ctrl+c** to quit):
```sh
$ npm run finalserve

```
## Please visit
You can see [the lesson at netlify](https://cra-serverless-app-hooks.netlify.app "the lesson at netlify") and decide if this is something for you to play around with at a later date.


## God bless!