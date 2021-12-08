const DataResult = require("./dataResult");

module.exports = class SuccessDataResult extends DataResult{
    constructor(data, message){
        super(true, data, message)
    }
}