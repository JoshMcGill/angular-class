var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    completed: {
        type: Boolean,
        default: false
    }
});

var TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;