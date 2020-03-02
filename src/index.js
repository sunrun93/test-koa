
import Koa from 'koa';
import router from './routes/route';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import path from 'path';
import koaBody from 'koa-body';
import josnutil from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';

const app = new Koa();

app.use(helmet());
app.use(statics(path.join(__dirname,'../public')));

const middlewares = compose([
  koaBody(),
  statics(path.join(__dirname,'../public')),
  cors(),
  josnutil({pretty: false, param: 'preety'}),
  helmet()
]);

app.use(middlewares);
app.use(router());
app.listen(3000)

