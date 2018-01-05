var express = require('express');
var db = require('./../sys/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GO to LIST!!');
});

router.get('/insert', function(req, res) {
	let post = {name : "tanvir", email: "tanvir@admin.com", password: "0000"};
	let sql = 'INSERT INTO users SET ?';
	let query = db.query(sql, post, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.render('users/insert', { title: 'Express', result: result });
	}); 
});

module.exports = router;
