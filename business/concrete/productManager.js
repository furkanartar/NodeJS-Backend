const IProductService = require("../abstract/iProductService");
const SuccessDataResult = require("../../core/utilities/results/successDataResult");
const ErrorDataResult = require("../../core/utilities/results/errorDataResult");
const Messages = require("../constants/messages.js");

module.exports = class ProductManager extends IProductService {
  constructor(productDal) {
    super();
    this.productDal = productDal;
    this.messages = new Messages();
  }

  getAll(product, callback) {
    this.productDal.getAll(product, function myCallback(err, data) {
      if (err) {
        callback(new ErrorDataResult(err));
      } else {
        callback(new SuccessDataResult(data));
      }
    });
  }

  //filtreli get eklenecek

  add(product, callback) {
    this.productDal.add(product, function myCallback(err, data) {
      if (err) {
        callback(new ErrorDataResult(err));
      } else {
        callback(new SuccessDataResult(data));
      }
    });
  }

  update(entity, data, callback) {
    const filter = { _id: data._id };
    const product = {
      name: data.name,
      unitPrice: parseInt(data.unitPrice),
      unitsInStock: parseInt(data.unitsInStock),
    };

    this.productDal.update(
      entity,
      filter,
      product,
      function myCallback(err, data) {
        if (err) {
          callback(new ErrorDataResult(err));
        } else {
          callback(new SuccessDataResult(data));
        }
      }
    );
  }

  delete(product, data, callback) {
    const filter = { _id: data._id };
    this.productDal.delete(product, filter, function myCallback(err, data) {
      if (err) {
        callback(new ErrorDataResult(err));
      } else {
        callback(new SuccessDataResult(data));
      }
    });
  }
};