const EntityRepository = require("../iEntityRepository");
const Product = require("../../../models/product");

module.exports = class MongooseEntityRepositoryBase extends EntityRepository {
  constructor() {
    super();
  }
  
  //buraya filtre geliştirilecek
  getAll(entity, callback) {
    entity.find({}, (err, data) => {
      callback(err, data);
    });
  }

  //buraya filtre geliştirilecek
  // get(entity, filter, callback) {
  //   entity.findById(filter, (err, data) => {
  //     callback(err, data);
  //   });
  // }

  add(data, callback) {
    console.log("🚀 ~ file: mongooseEntityRepositoryBase.js ~ line 26 ~ MongooseEntityRepositoryBase ~ add ~ data", data)
    const entity = new Product({
      name: data.name,
      unitPrice: data.unitPrice,
      unitsInStock: data.unitsInStock,
    });

    entity.save((err, data) => {
      callback(err, data);
    });
  }

  update(entity, filter, newEntity, callback) {
    entity.findOneAndUpdate(filter, newEntity, (err, data) => {
      callback(err, data);
    });
  }

  delete(entity, filter, callback) {
    entity.deleteOne(filter, (err, data) => {
      callback(err, data);
    });
  }
};
