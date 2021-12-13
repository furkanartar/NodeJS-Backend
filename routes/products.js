const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const ProductManager = require("../business/concrete/productManager");
const ProductDal = require("../dataAccess/concrete/mongoose/monProductDal");

const productManager = new ProductManager(new ProductDal());

//buraya filtre geliştirilecek ve sequelize'ye bakılacak
router.get("/", function (req, res) {
  productManager.getAll(Product, function callback(result) {
    if (result.success) {
      res.status(200).send(result);
    } else {
      res.status(400).send(result);
    }
  });
});

  //buraya filtre geliştirilecek ve sequelize'ye bakılacak
router.get("/getbyid/:id", function (req, res) {
  res.status(500).send("Servis şu an devre dışı, lütfen daha sonra tekrar deneyiniz.")
});

router.post("/", function (req, res) {
  productManager.add(req.body, function callback(result) {
    if (result.success) {
      return res.status(200).send(result.data);
    } else {
      return res.status(400).send(result);
    }
  });
});

router.put("/", function (req, res) {
  productManager.update(Product, req.body, function callback(result) {
    if (result.success) {
      return res.status(200).send(result.data);
    } else {
      return res.status(400).send(result);
    }
  });
});

router.delete("/", function (req, res) {
  productManager.delete(Product, req.body, function callback(result) {
    if (result.success) {
      return res.status(200).send(result.data);
    } else {
      return res.status(400).send(result);
    }
  });
});

router.all('/', function(req, res) {
  res.status(404).send('Route bulunamadı.');
})

module.exports = router;
