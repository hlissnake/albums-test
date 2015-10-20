### Albums App for Test 

You can see the unit-testing result in Travis [![Travis CI](https://travis-ci.org/hlissnake/albums-test.svg?branch=master)](https://travis-ci.org/hlissnake/albums-test)

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

you can get into `test/jest/` folder, and run `npm test` to run Jest testing, especially for React UI Component.
React Comps interaction is very complex in testing, so I just add two case for them.