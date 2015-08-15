## Magellan / mocha / wd Cross-Browser Testing Boilerplate

This is an example project for cross-browser testing using [Magellan](https://github.com/TestArmada/magellan) with [mocha](https://mochajs.org/) and [wd.js](https://github.com/admc/wd).


### Installation Example

**1.** Clone `boilerplate-mocha` into an isolated place outside of your project:

```console
cd ~
git clone git@github.com:TestArmada/boilerplate-mocha.git
```

**2.** Copy the contents of `boilerplate-mocha` into your project test folder, remove `.git`

```console
cd ~/myproject
mkdir automated-tests
cd automated-tests
cp -R ~/boilerplate ./
rm -rf .git
```

**3.** Install npm modules and run example tests

```console
npm install
npm test
```
