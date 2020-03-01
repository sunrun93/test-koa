const Koa = require('koa');
const app = new Koa();
const router = require('./routes/route');
const helmet = require('koa-helmet');
const statics = require('koa-static');
const path = require('path');


app.use(helmet());
app.use(statics(path.join(__dirname,'../public')));
app.use(router());
app.listen(3000)

// npx nodemon --exec babel-node src/index.js
