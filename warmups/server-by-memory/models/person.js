var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    carsOwned: [{ //relationship - cars owned by person
        make: String,
        model: String,
        year: Number,
        engine: String,
        miles: Number
    }]
})

module.exports = mongoose.model("People", personSchema);