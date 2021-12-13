const IProductDal = require("../../../dataAccess/abstract/IProductDal");
const MongooseEntityRepositoryBase = require("../../../core/dataAccess/mongoose/mongooseEntityRepositoryBase");

module.exports = class monProductDal extends IProductDal {
  constructor() {
    super();
    this.mongooseEntityRepositoryBase = new MongooseEntityRepositoryBase();
  }

  getAll(product, callback) {
    this.mongooseEntityRepositoryBase.getAll(product, callback)
  }

  // get(product, filter, callback) {
  //   this.mongooseEntityRepositoryBase.get(product, filter, callback)
  // }

  add(product, callback) {
      this.mongooseEntityRepositoryBase.add(product, callback)
  }

  update(product, filter, newEntity, callback) {
      this.mongooseEntityRepositoryBase.update(product, filter, newEntity, callback)
  }
  delete(product, filter, callback) {
      this.mongooseEntityRepositoryBase.delete(product, filter, callback)
  }
};
