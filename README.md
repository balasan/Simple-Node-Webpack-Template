# Simple-Node-Webpack-Template
Simple expess-webpack template with hot reloading

###Installation
install dependencies:
```
npm install
```

run the app in dev mode  
*all changes to the front-end code will be live-reloaded, but you have to restart the server if you make backend changes
```
npm start
```

build for production (no source maps)
```
npm run build
```

build app with source maps (usefull for debuggin production server)
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
