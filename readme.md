webextension-test
=================

Attempt to create more ergonomic dev environment for webextensions.

## Used tools

### Webpack

We use webpack to compile TS, bundle files into `background.js`, `popup.js` and `content-script.js`.

 - [Getting started guide](https://webpack.js.org/guides/getting-started/)
 - [TypeScript support](https://webpack.js.org/guides/typescript/)
 - [Output multiple files](https://stackoverflow.com/questions/31907672/how-to-set-multiple-file-entry-and-output-in-project-with-webpack)
 - [Copy static files](https://webpack.js.org/plugins/copy-webpack-plugin/)

```
npx webpack --config webpack.config.js
```

or

```
npm run build
```

### Web-ext & webextension-polyfill

 - https://github.com/mozilla/web-ext
 
```
npm install --save-dev web-ext

npm run start:firefox
```

- https://github.com/mozilla/webextension-polyfill

```
npm install --save-dev webextension-polyfill
```

### Storage

`chrome.storage` works with strings only, and if you pass in object, it automatically performs de/serialization using `JSON.stringify` and `JSON.parse`.

`JSON.parse` however returns plain JS object ([link](https://stackoverflow.com/questions/40201589/serializing-an-es6-class-object-as-json/40201783)), meaning if you passed class instance into storage, it will be broken upon retrieval, **and this happens silently**.

Solution here is to use [class-transformer](https://github.com/typestack/class-transformer) to convert from plain JS object to proper class instance.

Strongly typed abstraction upon `storage`, able to return classes, would be nice to have.

Maybe [storage manifest](https://developer.chrome.com/docs/extensions/mv2/manifest/storage/)?

Content of storage can be [viewed](https://ui.vision/howto/view-local-storage).

### Logging

 - https://www.npmjs.com/package/webpack-webextension-background-logger

 I was unable to make this one work :(

### Messaging

 - https://github.com/tshaddix/webext-redux

### Debugging

*You can access the extension from the console, however, when Webpack builds the extension you lose the references. A solution is to attach the function in the source code to the window like this `window.openTab = openTab;`. The function is then available in the console!*

## Resources

 - https://medium.com/@Morikko/developing-your-web-extension-with-the-best-tools-213207c2b6b5
