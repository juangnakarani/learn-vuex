# vuex2explore

> mengenal management state dengan vuex

## Build Setup
``` bash
# init simple webpack
vue init webpack-simple simple-store
# install dependencies
npm install
# install vuex pada simple webpack
npm install vuex --save
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
```
## Membuat Store

Hal mendasar pada store adalah `state` dan `mutations`. Ibarat component,`state` adalah object data dan `mutations` adalah methods/function terhadap `state`. 

cara menggunakan store.js adalah dengan `import store from './vuex/store'` lalu register store pada store properties vue component.



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
