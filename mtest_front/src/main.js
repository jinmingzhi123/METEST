const installElementPlus = require('./plugins/element');
const { createApp } = require('vue');
const App = require('./App.vue').default;
const store = require('./store').default;
require('./assets/css/icon.css');
const router = require('./router').default;
//require('./dev-server.js');


const app = createApp(App)
// main.js
let a=111;
let b=222;
var xxx = (c,d) => c*d;
console.log(xxx(a,b));

//require('./mock')
installElementPlus(app)
app
    .use(store)
    .use(router)
    .mount('#app')
