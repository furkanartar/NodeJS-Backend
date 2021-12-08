const DataResult = require("./dataResult");

module.exports = class ErrorDataResult extends DataResult{
    constructor(data, message){
        super(false, data, message)
    }
}