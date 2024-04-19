const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const cors = require('koa2-cors');
const { koaBody } = require('koa-body');

const permissions = require('./permissions');
const member = require('./member');
const libs = require('./libs');

app.use(cors());
app.use(koaBody());

router.get('/', (ctx, next) => {
  console.log(ctx.query)
  ctx.body = ctx.query;
});


router.get('/permissions-map', (ctx, next) => {
  const result = {};
  Object.keys(permissions).forEach((groupName) => {
    result[groupName] = {};
    permissions[groupName].forEach((action, index) => {
      result[groupName][action] = 2 ** index;
    });
  });
  ctx.body = result;
});

router.get('/get-my-permissions', async (ctx, next) => {
  const memberPermissions = member[ctx.query.name];
  const data = await libs.convertToBitwise(permissions, memberPermissions);
  ctx.body = data;
});

router.post('/check-my-permissions', async (ctx, next) => {
  const result = await libs.getPermissions(permissions, ctx.request.body)
  ctx.body = result;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
