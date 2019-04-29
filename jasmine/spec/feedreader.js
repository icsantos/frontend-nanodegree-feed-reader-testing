/* eslint-disable capitalized-comments */
/* global allFeeds loadFeed */

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

   /* This test suite is all about the RSS feeds
    * definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* Test that the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds)
                .withContext('Missing allFeeds variable')
                .toBeDefined();

            if (typeof allFeeds !== 'undefined') {
                expect(allFeeds.length)
                    .withContext('Empty allFeeds variable')
                    .not.toBe(0);
            }
        });

        /* Test each feed in the allFeeds object to ensure
         * it has a URL defined and that the URL is not empty.
         */
        it('require each source to have a defined, non-empty link', function() {
            for (const feed of allFeeds) {
                expect(feed.url)
                    .withContext('Missing url property')
                    .toBeDefined();

                if (typeof feed.url !== 'undefined') {
                    expect(feed.url.length)
                        .withContext('Empty url property')
                        .not.toBe(0);
                }
            }
        });

        /* Test each feed in the allFeeds object to ensure
         * it has a name defined and that the name is not empty.
         */
        it('require each source to have a defined, non-empty name', function() {
            for (const feed of allFeeds) {
                expect(feed.name)
                    .withContext('Missing name property')
                    .toBeDefined();

                if (typeof feed.name !== 'undefined') {
                    expect(feed.name.length)
                        .withContext('Empty name property')
                        .not.toBe(0);
                }
            }
        });
    });

    /* This test suite is about the menu element
    */
    describe('The menu', function() {
        const menuElem = $('body');

        /* Test that the menu element is hidden by default.
         */
        it('is hidden by default', function() {
            expect(menuElem[0]).toHaveClass('menu-hidden');
            // This is an alternative way to test if an element
            // has a specific class, but the test failure message
            // is less informative
            expect(menuElem.hasClass('menu-hidden'))
                .withContext('Element has "menu-hidden" class')
                .toBe(true);
        });

        /* Test that the menu changes visibility
          * when the menu icon is clicked.
         */
        it('changes visibility when its icon is clicked', function() {
            const menuIcon = $('.menu-icon-link');

            // The menu is hidden by default so the series of clicks
            // will toggle the visibility on and off
            menuIcon.trigger('click');
            expect(menuElem[0])
                .withContext('1st click')
                .not.toHaveClass('menu-hidden');

            menuIcon.trigger('click');
            expect(menuElem[0])
                .withContext('2nd click')
                .toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        const index = 0;
        const feed = allFeeds[index];

        /* Test that after the asynchronous loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(index, done);
        });

        it('are one or more', function() {
            expect($('.entry-link').length)
                .withContext(`"${feed.name}" <${feed.url}>`)
                .toBeGreaterThanOrEqual(1);
        });
    });

    describe('New Feed Selection', function() {
        let oldEntries = [];
        let newEntries = [];
        let different = false;

        /* Test that the content actually changes after
         * a new feed is loaded by the loadFeed function.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0);
            oldEntries = $('.entry-link')
                .toArray()
                .map((entry) => entry.href)
                .sort();

            loadFeed(1, done);
        });

        it('loaded new content', function() {
            newEntries = $('.entry-link')
                .toArray()
                .map((entry) => entry.href)
                .sort();

            if (oldEntries.length === newEntries.length) {
                for (let idx = 1; idx < oldEntries.length; idx++) {
                    if (oldEntries[idx] !== newEntries[idx]) {
                        different = true;
                        break;
                    }
                }
            } else {
                different = true;
            }

            expect(different)
                .withContext('New feed has different content from old feed')
                .toBe(true);
        });
    });
}());
