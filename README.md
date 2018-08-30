# Inno Starter pack

A barebones React app using webpack, sass and hot reloading with browsersync.

## Installation

```
$ npm install
```

## Running Locally

```
$ npm start
```

It is for dev environment and you can see some statistics with visualize (http://localhost:8080/statistics.html)


## Prod

```
$ npm run build
```

This command line create a dist with your bundle

## Add a new bundle

Add on webpack.common.js an entry and copy on plugins a new HtmlWebpackPlugin with your entry on chunks.

example:

new HtmlWebpackPlugin({
  template: "./src/new.html",
  filename: "./new.html",
  chunks: ['entry']
})


## Vulnerabilities

```
$ npm update request --depth 3
```

It still 5 vulnerabilities with [node sass](https://github.com/sass/node-sass/issues/2355)

## Docker

To create the image
```
docker build -t <your username>/innostarterkit .
```

To run the image
```
docker run -p 3000:8080 -d <your username>/innostarterkit
```

To check inside the container
```
docker exec -it <containerId> bash
```

Build docker compose
```
docker-compose build
```

To up docker compose
```
docker-compose up
```

## Link

- [Atom](https://www.sitepoint.com/10-essential-atom-add-ons/)

- [Webpack](http://putaindecode.io/fr/articles/js/webpack/)

- [Node JS and Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)