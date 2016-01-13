var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    name: String,
    message: String,
    upvotes: Number,
    downvotes: Number,
    comments: [{
        required: false,
        name: String,
        message: String,
        upvotes: Number,
        downvotes: Number,
        pid: String
    }]
})

var CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;