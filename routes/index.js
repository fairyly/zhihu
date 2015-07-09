var express = require('express');
var router = express.Router();

var home = require('./../controller/home');

/* GET home page. */
// dailyData.getArticle();

// router.get('/', function(req, res) {
//     dailyData.getArticle();
//     res.render('index', { title: 'Daily' });
// });

// 每日的latest数据
router.get('/', home.getLatest);
router.get('/index.htm', home.getLatest);

router.get('/list.htm', home.list);
router.get('/s/:key', home.so);

// 按日期搜索
router.get('/d/:day', home.soDate);
router.get('/m/:month', home.soDate);
router.get('/y/:year', home.soDate);
// router.get('/article/:id', dailyAPI.getArticle);

module.exports = router;
