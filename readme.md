webextension-test
=================

Attempt to create more ergonomic dev environment for webextensions.

## Used tools

### Webpack

We use webpack to compile TS, bundle files into `background.js`, `popup.js` and `content-script.js`.

 - https://webpack.js.org/guides/getting-started/
 - https://webpack.js.org/guides/typescript/
 - https://stackoverflow.com/questions/31907672/how-to-set-multiple-file-entry-and-output-in-project-with-webpack


    npx webpack --config webpack.config.js

or

    npm run build


### Logging

 - https://www.npmjs.com/package/webpack-webextension-background-logger

### Messaging

 - https://github.com/tshaddix/webext-redux

### Debugging

*You can access the extension from the console, however, when Webpack builds the extension you lose the references. A solution is to attach the function in the source code to the window like this `window.openTab = openTab;`. The function is then available in the console!*

## Resources

 - https://medium.com/@Morikko/developing-your-web-extension-with-the-best-tools-213207c2b6b5
