module.exports = class IEntityRepository {
  constructor() {
    if (this.constructor == IEntityRepository) {
      throw new Error("Abstract class'ın instance'ını oluşturmaya çalışıyorsun, yapma.");
    }
  }

  getAll(entity, filter = null) {throw new Error("'getAll()' adlı fonksiyon implemente edilmedi.")}
  get(entity, filter) {throw new Error("'get()' adlı fonksiyon implemente edilmedi.")}
  add(entity) {throw new Error("'add()' adlı fonksiyon implemente edilmedi.")}
  update(entity) {throw new Error("'update()' adlı fonksiyon implemente edilmedi.")}
  delete(entity) {throw new Error("'delete()' adlı fonksiyon implemente edilmedi.")}
};
