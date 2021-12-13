const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://localhost/trendyol', { useMongoClient: true});
    mongoose.connection.on("open", () => {
      console.log("MongoDB'ye bağlandı");
    });
    mongoose.connection.on("error", (err) => {
      throw new Error("MongoDB'ye bağlanırken bir sorun oluştu", err.messages);
    });

    
  mongoose.Promise = global.Promise;
}