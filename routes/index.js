const router = require('koa-router')()
var request = require('request-promise-native');


router.get('/', async (ctx, next) => {
	await ctx.render('index.ejs', {title: '22'})
})

router.get('/string', async (ctx, next) => {
		let res = await request({ url: 'http://longwenhoutai.xiaohe.com/test/system/dictionary/querySubject', method: 'POST', headers: {userId: "430ac3c94ec9484ab1c1ccebcc750c52", accessToken: "506af49703459bc47d4574fe237f4264"}});
	  ctx.body = res;
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
