## Magellan / mocha / wd Cross-Browser Testing Boilerplate

This is an example project for cross-browser testing using [Magellan](https://github.com/TestArmada/magellan) with [mocha](https://mochajs.org/) and [wd.js](https://github.com/admc/wd).


### Installation Example

**1.** Clone `boilerplate-mocha-wd` into an isolated place outside of your project:

```console
cd ~
git clone git@github.com:TestArmada/boilerplate-mocha-wd.git
```

**2.** Copy the contents of `boilerplate-mocha-wd` into your project test folder, remove `.git`

```console
cd ~/myproject
mkdir automated-tests
cd automated-tests
cp -R ~/boilerplate-mocha-wd ./
rm -rf .git
```

**3.** Install npm modules and run example tests

```console
npm install
npm test
```

**4.** Try the testing workflow

To run the tests included in this example project one by one, type:
```console
./node_modules/.bin/magellan --serial
```

If you already have `./node_modules/.bin` in your `PATH`, you can simply type this instead:
```console
magellan --serial
```
without `./` or any path prefix.

In the above example, the `--serial` option runs all of your tests one at a time with live output. To get help on command options, type:
```console
magellan --help
```

For more information on how to run tests, including in different browsers, in parallel, and with filters and tags, see: https://github.com/TestArmada/magellan

**5.** Modify example tests and base class

To start developing your own tests, take a look at `tests/func/spec`. For more information on how to write `mocha` and `wd` tests, check out the project pages for [mocha](https://mochajs.org/) and [wd.js](https://github.com/admc/wd).

Notes
=====

  - Magellan may support multiple test frameworks, but this boilerplate is based on [mocha](https://mochajs.org/) and [wd.js](https://github.com/admc/wd). Magellan also supports other frameworks, such as [Nightwatch.js](https://nightwatchjs.org/). Please see our [Nightwatch boilerplate project](https://github.com/TestArmada/boilerplate-nightwatch)

