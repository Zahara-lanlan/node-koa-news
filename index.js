// const router = require("./router/news.js");
// const Koa = require("koa");
// // const router = require("koa-router")
// const serve = require("koa-static");
// const path = require("path");
// const views = require("koa-views");

// const app = new Koa();

// app.use(serve(__dirname + "/static"));
// app.use(
//   views(__dirname + "/views", {
//     extension: "pug",
//   })
// );

// app.use(router.routes());

// app.listen(3030);
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const views = require("koa-views");
const news = require('./router/news');
const detail = require('./router/detail');

const app = new Koa();

app.use(serve(__dirname + "/static"));
app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

const router = new Router();

router.redirect("/news", "/");
router.get("/",news)
router.get("/detail",detail)

app.use(router.routes());

app.listen(3030);
