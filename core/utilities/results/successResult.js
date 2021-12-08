const Result = require("./result");

module.exports = class SuccessResult extends Result{
    constructor(message){
        super(true, message)
    }
}