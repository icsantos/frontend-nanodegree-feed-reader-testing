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

- Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty
- Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
- Write a new test suite named `"The menu"`
- Write a test that ensures the menu element is hidden by default
- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
- Write a test suite named `"Initial Entries"`
- Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
- Write a test suite named `"New Feed Selection"`
- Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes

Additional requirements:

- No test should be dependent on the results of another
- Callbacks should be used to ensure that feeds are loaded before they are tested
- Error handling should be implemented for undefined variables and out-of-bound array access
- When complete, all tests should pass

## Steps to Run the Application

## Links

- [Feed Reader Testing starter code](https://github.com/udacity/frontend-nanodegree-feedreader)
- [Feed Reader Testing project rubric](https://review.udacity.com/#!/rubrics/18/view)
- [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549)
- [Jasmine Documentation](http://jasmine.github.io)

## Contributing

This repository is for a project for the Front-End Web Developer NanoDegree program at Udacity. Therefore, pull requests will not be accepted.
