module.exports = class IProductService {
    constructor(){
        if(this.constructor === IProductService){
            throw new Error("Can't instantiate abstract class!");
        }
    }

  getAll(product, callback) {throw new Error("'getAll()' adlı fonksiyon implemente edilmedi.")}
//   get(product, filter) {throw new Error("'get()' adlı fonksiyon implemente edilmedi.")}
  add(product) {throw new Error("'add()' adlı fonksiyon implemente edilmedi.")}
  update(product) {throw new Error("'update()' adlı fonksiyon implemente edilmedi.")}
  delete(product) {throw new Error("'delete()' adlı fonksiyon implemente edilmedi.")}
}