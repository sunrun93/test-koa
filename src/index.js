
import Koa from 'koa';
import router from './routes/route';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import path from 'path';

const app = new Koa();

app.use(helmet());
app.use(statics(path.join(__dirname,'../public')));
app.use(router());
app.listen(3000)

