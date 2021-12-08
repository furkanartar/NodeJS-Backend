const Result = require('./result');

module.exports = class DataResult extends Result{
    constructor(success, data, message){
        super(success, message)
        this.data = data;
    }
}