const Result = require("./result");

module.exports = class ErrorResult extends Result{
    constructor(message){
        super(false, message)
    }
}