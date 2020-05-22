# javascript-essentials

Java script essentials common lib and string and array operations.

## Sending Feedback

I am always open to [your feedback](https://github.com/Akash-barsagadey/javascript-essentials/issues.

## Folder Structure

After creation, your project should look like this:

```
javascript-essentials/
  README.md
  node_modules/
  package.json
  src/
    index.html
    index.js
  src/
    objects
    date
    es6
    array/
        common-in-array.js
        difference-arrays.js
```

For the project to build, **these files must exist with exact filenames**:

-   `src/index.html` is the page template;
-   `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `src` can be used from `src/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

## For environments using [Node]

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:

```sh
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port **5000**. Like many of [serve](https://github.com/zeit/serve)’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

```sh
serve -h
```

## For environments using [Surge]

```sh
Install Surge using npm by running the following command:
npm install -g surge
surge -p build
Enter user emailid , password
you will get dynamic domain.sh
```

This is the easiest way to deploy online using static assets that gives us pre generated URL.

Run this command to get a full list of the options available:

```sh
surge --help
```
