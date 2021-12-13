module.exports = class Messages {
  add(name) {
    return `${name} eklendi`;
  }
  update(name) {
    return `${name} güncellendi`;
  }
  delete(id) {
    return `${id} silindi`;
  }
  exists(nameOrId) {
    return `${nameOrId} zaten var`;
  }
  checkField(fieldName) {
    return `${fieldName} alanını kontrol ediniz`;
  }
  routeNotFound(){
      return "Geçersiz route.";
  }
};