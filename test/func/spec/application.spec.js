var app = require("../../../server");
var PORT = process.env.FUNC_PORT || 3003;
var HOST = process.env.TEST_HOST || "http://127.0.0.1:" + PORT;

// WD helpers.
// https://github.com/admc/wd/blob/master/lib/special-keys.js
var wd = require("wd");
var ENTER_KEY = wd.SPECIAL_KEYS.Enter;

// Rowdy helpers and adapter.
var rowdy = require("rowdy");
var MochaAdapter = rowdy.adapters.mocha;
var adapter = new MochaAdapter();
var helpers = rowdy.helpers;

describe("func/application", function () {
  var client;
  var server;

  // --------------------------------------------------------------------------
  // Mocha
  // --------------------------------------------------------------------------
  // Set a Mocha global timeout of 10 seconds to allow for test wonkiness.
  this.timeout(10000);

  // --------------------------------------------------------------------------
  // Selenium (WD.js/Rowdy) initialization
  // --------------------------------------------------------------------------
  // We use WD.js to get a client to Selenium, and Rowdy to help configure our
  // client, start a local selenium server if specified and provide a Mocha
  // adater.
  //
  // For multi-file tests this setup should be extracted to a `base.spec.js`
  // file and executed **once** for the entire test suite.
  adapter.before();
  adapter.beforeEach();
  adapter.afterEach();
  adapter.after();

  before(function (done) {
    // The `adapter.before();` call has the side effect of instantiating a
    // Selenium / WD.js client that we can extract here.
    client = adapter.client;

    // Set a global Selenium timeout that is _before_ our test timeout.
    client
      .setImplicitWaitTimeout(200)
      .nodeify(done);
  });

  // --------------------------------------------------------------------------
  // Dev. Server
  // --------------------------------------------------------------------------
  // Start up (and later stop) a single instance of the server so that we can
  // interact with the web application via our tests.
  //
  // An alternative to this approach is to hit a live running staging or
  // production server for "smoke" tests.
  //
  // For multi-file tests this setup should be extracted to a `base.spec.js`
  // file and executed **once** for the entire test suite.
  before(function (done) {
    // Start the dev. server.
    app.serveRoot();
    server = app.listen(PORT, done);
  });

  after(function (done) {
    if (!server) { return done(); }
    server.close(done);
  });

  // --------------------------------------------------------------------------
  // Suites
  // --------------------------------------------------------------------------
  describe("camel", function () {
    it("should convert complex input w/ extra spaces + click", function (done) {
      console.log(HOST)
      client
        // Get the web application page.
        .get(HOST)

        .waitForElementByCss(".js-input")
        .getValue()
        .then(function (text) {
          expect(text).to.equal("nothing");
        })

        // Type a string.
        .waitForElementByCss(".js-input")
        .type("magellan")

        // Verify the entry
        .waitForElementByCss(".js-input")
        .getValue()
        .then(function (text) {
          expect(text).to.equal("nothingmagellan");
        })

        // ... and we're done!
        .nodeify(done);
    });
  });

});
