const combineRoutes = require('koa-combine-routers');

const aRoutes = require('./aRoute');
const bRoutes = require('./bRoute');

module.exports = combineRoutes(
  aRoutes,
  bRoutes
);