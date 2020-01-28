const Router = require('koa-router');

const CartModel = require('../models/cart.model');

const router = new Router({
    prefix: '/bso'
});

router
  .get('/', async (ctx, next) => {
    const query = ctx.request.query;
    await CartModel.find(query)
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el get')
        console.log(err)
        ctx.body = err;
    });

  })
  .post('/', async (ctx, next) => {
    await  CartModel(ctx.request.body).save()
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el post')
        console.log(err)
        ctx.body = err;
    });
  })
  .put('/:id', async (ctx, next) => {
    await CartModel(ctx.request.body).save()
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el post')
        console.log(err)
        ctx.body = err;
    });
  })
  .del('/:id', (ctx, next) => {
    ctx.body = 'DEL';
  })
  .get('/:id', async (ctx, next) => {
    await CartModel.findById(ctx.params.id)
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el get all')
        console.log(err)
        ctx.body = err;
    });

  })

  module.exports = router;