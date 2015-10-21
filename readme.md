### Albums App for Test 

You can see the unit-testing result in Travis [![Travis CI](https://travis-ci.org/hlissnake/albums-test.svg?branch=master)](https://travis-ci.org/hlissnake/albums-test)

Application's online demo [hlissnake.github.io/albums-test/](http://hlissnake.github.io/albums-test/)

#### Architecture:
* React.js for UI Components.
* SCSS preprocessor of css.
* Webpack+gulp for project build.

#### Unit Testing
* Mocha, Jest, React-test-utils.
* Mocking Data for http request.
* BDD style designed.

run `npm start` in CLI to open the demo

run `npm test` in CLI to run testing case for data models

you can CLI into `test/jest/` folder, and run `npm test` to run Jest testing, especially for React UI Component. Oh and don't forget to install iojs before runing Jest.

Communication between multiple components in React is not easy for testing, so I just tested two isolated component as well. (Refs issue of multiple React loaded, be waiting to be fix)

I probably need to add lazy-loading for thumbnail images, which is quite so much.