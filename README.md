# Feed Reader Testing

Udacity Front-End Web Developer Nanodegree Project 4

## Project Overview

In this project we are given a web-based application that reads RSS feeds. We are to use [Jasmine](http://jasmine.github.io/) to write a number of test suites against the application. These will test the underlying business logic of the application, as well as event handling and DOM manipulation.

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Good tests give developers the ability to quickly analyze whether new code breaks an existing feature within the codebase, without having to manually test all of the functionality.

## Getting Started

The starting source code was cloned from <https://github.com/udacity/frontend-nanodegree-feedreader>.

## Project Specifications

Required tests:

1. Edit the `allFeeds` variable in `app.js` to make the provided test fail. Return the `allFeeds` variable to a passing state after reviewing the failed test
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
4. Write a new test suite named `"The menu"`
5. Write a test that ensures the menu element is hidden by default
6. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
7. Write a test suite named `"Initial Entries"`
8. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
9. Write a test suite named `"New Feed Selection"`
10. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes

Additional requirements:

- No test should be dependent on the results of another
- Callbacks should be used to ensure that feeds are loaded before they are tested
- Error handling should be implemented for undefined variables and out-of-bound array access
- When complete, all tests should pass

## Steps to Run the Test Suites

### `'RSS Feeds'` Test Suite

#### `'are defined'` Test

- Open `apps.js` in an editor
- Rename `allFeeds` to `allFeed` then refresh the browser
  - Jasmine is red: `ReferenceError: allFeeds is not defined`
- Add an `allFeeds` variable as an empty array then refresh the browser
  - Jasmine is red: `Error: Expected 0 not to be 0.`
- Delete `allFeeds` and rename `allFeed` to `allFeeds` then refresh the browser
  - Jasmine is green

#### `'require each source has a defined, non-empty link'` test

- Open `apps.js` in an editor
- Add a new feed to `allFeeds` with a missing `url`
  - Jasmine is red: `Error: Expected undefined to be defined.`
  - Jasmine is red: `TypeError: Cannot read property 'length' of undefined`
- Add a `url` with an empty value to the new feed
  - Jasmine is red: `Error: Expected 0 not to be 0.`
- Delete the new feed that was added
  - Jasmine is green

#### `'require each source has a defined, non-empty name'` test

- Open `apps.js` in an editor
- Add a new feed to `allFeeds` with a missing `name`
  - Jasmine is red: `Error: Expected undefined to be defined.`
  - Jasmine is red: `TypeError: Cannot read property 'length' of undefined`
- Add a `name` with an empty value to the new feed
  - Jasmine is red: `Error: Expected 0 not to be 0.`
- Delete the new feed that was added
  - Jasmine is green

### `'The menu'` Test Suite

### `'Initial Entries'` Test Suite

### `'New Feed Selection'` Test Suite

## Links

- [Feed Reader Testing starter code](https://github.com/udacity/frontend-nanodegree-feedreader)
- [Feed Reader Testing project rubric](https://review.udacity.com/#!/rubrics/18/view)
- [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549)
- [Jasmine Documentation](http://jasmine.github.io)

## Contributing

This repository is for a project for the Front-End Web Developer NanoDegree program at Udacity. Therefore, pull requests will not be accepted.
