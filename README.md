# Simple-Node-Webpack-Template
Simple expess-webpack template with hot reloading

###Installation
install dependencies:
```
npm install
```

run the app in dev mode - launches server with nodemon and watches server files and hot-module-replaces frontend
```
npm run dev
```

default start (use NODE_ENV=production to test production build without hot-module replacement)
```
npm start
```

build for production (no source maps, no hot-module-replacement)
```
npm run build
```

build app with source maps (useful for debuggin production build)
```
npm run build-dev
```

###Notes
webpack will serve the build.js file from memory, however if there are errors building the file, the app will load the /public/build.js file from the file system and it may not reflect the latest changes

css is processed using postcss with autoprefixer, easings (you can use easings from http://easings.net/) and precss (you can write sass style css)  
for more infoe see https://github.com/postcss/postcss  

example of css you can write:
```
.container{
  .item{
    transition: all .6s easeInQuart;
    transform: translateX(100%);
  }
}
```

all css is required inside the index.js file and is built into the final bundle.js
