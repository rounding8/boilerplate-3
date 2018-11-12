
# Demo #3 ∞ React + webpack Application v2 🍽

### Server-side Web Application using React + webpack

> The purpose of this boilerplate is to show that I know one of many ways to create a web application; feel free to clone|fork and use as needed :D

<br>

This setup would be ideal for deploying via [Docker](https://www.docker.com), [AWS S3 Bucket](https://aws.amazon.com/s3), etc.

<br>

## Development

```
$ git clone ssh://git@github.com:rounding8/boilerplate-3.git    # Clone Remote Repository
$ cd boilerplate-3/                                             # Change Directory to "boilerplate-3" of Local Repository
$ yarn                                                          # Install Application Dependencies via [Yarn](https://yarnpkg.com)
$ yarn start                                                    # Execute in "Development" mode
```

<br>

## Deployment

```
$ yarn build            # Generates Production *app* distribution index.html, bundle.js, etc.
```

> App deployment can be handled using [CircleCI](https://circleci.com), [Jenkins](https://jenkins.io), [Grunt](https://gruntjs.com), etc.

<br>

## Structure

```
|- app                  -- Webpack build of full-stack application (i.e. dist)
  |- index.html         // Single HTML Index File for Testing Progress SPA
  |- bundle.js          // Single webpack compiled source script of Application for Production
  |- styles.css         // Single webpack compiled source CSS of Application for Production
  |- ...                // Bundled assets to be included w/ dist (e.g. favicon.ico, custom font files, etc.)
|- node_modules/        // Packages installed via Yarn (dependencies & devDependencies)
|- public               -- Public assets
  |- css
    |- app.css          // Main CSS Source of app styles; imports child CSS modules
    |- ...
  |- html
    |- index.html       // Main HTML Source
  |- icon
  |- img
|- src                  -- React Components
  |- components
    |- auth             // Authentication component
    |- menu             // Hamburger/Pancakes User Menu
  |- session
    |- index.js         // User Session handler using js-cookie
    |- settings.js      // Globals/Constants for usage throughout app
  |- utils
    |- index.js         // Shared Utility f(n)s
  |- index.jsx          // Main webpack Entry
|- webpack              // Build Configurations
  |- common.js          // Shared webpack config settings (used in all envs)
  |- dev.js             // Development build & local server config settings (yarn start)
  |- prod.js            // Production build config settings (yarn build)
|- .babelrc             // Babel Configuration (babel-loader)
|- .gitignore           // Git repository tracking files & folders to ignore
|- LICENSE
|- package.json         // Resource for installing & managing Application dependencies
|- README.md            // Project Documentation & Code Development Management Reference
|- yarn.lock
```

<br>

### Client

| Resource                                 | Source | Type    | Implementation                                                               |
|------------------------------------------|--------|---------|------------------------------------------------------------------------------|
| [Google Fonts](https://fonts.google.com) | `Font` | Library | Imports base application font [Lato](https://fonts.google.com/specimen/Lato) |

<br>

### Server

| Resource                                                                    | npm                                                                | Description / Implementation                              |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------|
| [Axios](https://github.com/axios/axios)                                     | [axios](https://www.npmjs.com/package/axios)                       | Promise-based HTTP client                                 |
| [Polyfill](https://babeljs.io/docs/usage/polyfill)                          | [babel-polyfill](https://www.npmjs.com/package/babel-polyfill)     | Dependency for Authentication oidc-client-js library      |
| [Bulma](https://bulma.io)                                                   | [bulma](https://www.npmjs.com/package/bulma)                       | CSS framework based on Flexbox                            |
| [JavaScript Cookie](https://github.com/js-cookie/js-cookie)                 | [js-cookie](https://www.npmjs.com/package/js-cookie)               | JavaScript API for handling cookies                       |
| [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)      | [prop-types](https://www.npmjs.com/package/prop-types)             | Runtime type checking for React props and similar objects |
| [react](https://reactjs.org)                                                | [react](https://www.npmjs.com/package/react)                       | A JavaScript library for building user interfaces         |
| [ReactDOM](https://reactjs.org/docs/react-dom.html)                         | [react-dom](https://www.npmjs.com/package/react-dom)               | DOM-specific methods used at top level of application     |
| [React Idle Timer](https://github.com/supremetechnopriest/react-idle-timer) | [react-idle-timer](https://www.npmjs.com/package/react-idle-timer) | Idle Timeout component for forcing User Logout @ 30 mins. |

<br>

> See additional [development dependencies](https://github.com/rounding8/boilerplate-3/blob/master/package.json#L26-L42)

<br>

## References

* [HSL Color Picker](http://hslpicker.com)
* [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)
* [webpack Configuration](https://webpack.js.org/configuration)

<br>

## Resources

* [Sublime Text](https://www.sublimetext.com)
* [VS Code](https://code.visualstudio.com/download)

<br>

## Chrome Dev Extensions

* [Immutable.js Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)
* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh)

<br>

## Changelog

| Version | Date     | Commit                                                                                                | Description |
|---------|----------|-------------------------------------------------------------------------------------------------------|-------------|
| 1.0.0   | 11-12-18 | [e43137e](https://github.com/rounding8/boilerplate-3/commit/e43137e16509f91bc8eec2278bdffbe792a59249) | Updated Boilerplate w/ Initial Application |
| 0.0.0   | 11-12-18 | [6193f3d](https://github.com/rounding8/boilerplate-3/commit/6193f3d5db1dd1af58de0a30b552366db91dc0cb) | 🎉  Initial commit |
