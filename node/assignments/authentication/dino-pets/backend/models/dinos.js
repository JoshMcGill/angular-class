var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;

var Dino = new Schema({
    name: {
       type: String,
       required: true,
    },
    breed: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    age: Number,
    tamed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('DinoPets', Dino);