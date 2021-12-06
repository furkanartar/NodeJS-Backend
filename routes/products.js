var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('getall');
});
router.get('/getbyid/:id', function(req, res, next) {
  res.send(req.params.id); 
});
router.post('/', function(req, res, next) {
  res.send('add');
});
router.put('/', function(req, res, next) {
  res.send('update');
});
router.delete('/', function(req, res, next) {
  res.send('delete');
});
router.all('*', function(req, res, next) {
  res.send('404');
});

module.exports = router;