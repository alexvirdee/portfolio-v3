# My Portfolio Website

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

My personal portfolio website.

# Technologies

- Just static web technologies used... HTML, CSS/SASS, Vanilla JavaScript

## Project uses yarn

### Installation

Install the dependencies and devDependencies and start the server and webpack.

```sh
$ cd portfolio-v3
$ yarn install
$ yarn run start
$ yarn run webpack:start
```

The site should be running on http://localhost:8080/

Also can run the server using http-server

```
npx http-server .
```

### Deployment

Currently just building the site from master branch at the root

```
$ git checkout master
$ git fetch
$ git push
```
