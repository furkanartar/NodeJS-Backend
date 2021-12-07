const Messages = require("../core/utilities/constants/messages.js");
const express = require('express');
const router = express.Router();

const messages = new Messages;

router.get('/', function(req, res, next) {
  res.send('getall');
});
router.get('/getbyid/:id', function(req, res, next) {
  res.send(req.params.id); 
});
router.post('/', function(req, res, next) {
  res.send(messages.add("xxx"));
});
router.put('/', function(req, res, next) {
  res.send(messages.add("xxx"));
});
router.delete('/', function(req, res, next) {
  res.send(messages.delete("xxx"));
});
router.all('*', function(req, res, next) {
  res.send(messages.notFoundRoute);
});

module.exports = router;