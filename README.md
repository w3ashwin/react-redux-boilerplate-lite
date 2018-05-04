[![Known Vulnerabilities](https://snyk.io/test/github/w3ashwin/react-redux-boilerplate-lite/badge.svg?targetFile=package.json)](https://snyk.io/test/github/w3ashwin/react-redux-boilerplate-lite?targetFile=package.json) [![Build Status](https://travis-ci.org/w3ashwin/react-redux-boilerplate-lite.svg?branch=master)](https://travis-ci.org/w3ashwin/react-redux-boilerplate-lite)

Webpack 4 Boilerplate
===========

> Webpack 4 boilerplate with Babel, SASS, React 16.2, React router v4 on board

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go.
please use node version >= 8.9.4.

## Setup
Install dependencies
```sh
$ yarn install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8081/](http://localhost:8081/)
```sh
$ yarn dev
```
## Deployment
Build the current application
```sh
$ yarn build
```

## Stats
Check the stats of the bundle
```sh
$ yarn stats
```
## Building web app in docker
Build using docker
```sh
$ docker-compose build web
```

## Running in docker
Running web-app using docker
```sh
$ docker-compose up web
```

## Docker terminal commands
Running docker terminal commands
```sh
$ docker-compose run --rm web yarn <script>
```

## Getting into container
Getting into container
```sh
$ docker-compose run --rm web bash
```

