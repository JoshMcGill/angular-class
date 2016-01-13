var express = require("express");
var cors = require('cors')
var uuid = require('uuid');
var app = express();
var mongoose = require("mongoose");
var Comment = require("./models/comment");

var db = mongoose.connect("mongodb://localhost/issues");

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(cors());

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});


app.get('/vote', function (req, res) {

    Comment.find(function (err, comments) {
        var issues = []
        for (var i = 0; i < comments.length; i++) {
            issues.push(comments[i]);
        }
        res.send(issues);
    })


})

app.post('/vote', function (req, res) {

    var issue = req.body;

    var newIssue = new Comment({
        name: issue.name,
        message: issue.message,
        upvotes: 0,
        downvotes: 0,
        comments: []
    });

    newIssue.save();

    Comment.find(function (err, comments) {
        var issues = []
        for (var i = 0; i < comments.length; i++) {
            issues.push(comments[i]);
        }
        res.send(issues);
    })


})

app.post('/comment', function (req, res) {

    var sentcomment = req.body;

    Comment.findOne({

        _id: sentcomment.id

    }, function (err, comment) {

        var sentcomment = req.body;

        var newComment = {
            name: sentcomment.name,
            message: sentcomment.message,
            upvotes: 0,
            downvotes: 0,
            pid: comment._id
        }

        comment.comments.push(newComment);

        comment.save(function (err) {
            Comment.find(function (err, comments) {
                var issues = []
                for (var i = 0; i < comments.length; i++) {
                    issues.push(comments[i]);
                }
                res.send(issues);
            })
        });


    })



})

app.put('/upvote/:commentId', function (req, res) {
    Comment.findOne({
        _id: req.params.commentId
    }, function (err, comment) {
        comment.upvotes = comment.upvotes + 1;

        comment.save(function (err, newcomment) {
            Comment.find(function (err, comments) {
                var issues = []
                for (var i = 0; i < comments.length; i++) {
                    issues.push(comments[i]);
                }
                res.send(issues);
            })
        });
    })
})

app.put('/downvote/:commentId', function (req, res) {
    Comment.findOne({
        _id: req.params.commentId
    }, function (err, comment) {
        comment.downvotes = comment.downvotes + 1;

        comment.save(function (err, newcomment) {
            Comment.find(function (err, comments) {
                var issues = []
                for (var i = 0; i < comments.length; i++) {
                    issues.push(comments[i]);
                }
                res.send(issues);
            })
        });
    })
})

app.put('/commentDownvote/:commentId/:commentId2', function (req, res) {
    Comment.findOne({
        _id: req.params.commentId
    }, function (err, comment) {
        for (var i = 0; i < comment.comments.length; i++) {
            if (comment.comments[i]._id.toString() === req.params.commentId2) {
                comment.comments[i].downvotes = comment.comments[i].downvotes + 1;
                comment.save(function (err, newcomment) {
                    Comment.find(function (err, comments) {
                        var issues = []
                        for (var i = 0; i < comments.length; i++) {
                            issues.push(comments[i]);
                        }
                        res.send(issues);
                    })
                });
            }
        }
    });
})

app.put('/commentUpvote/:commentId/:commentId2', function (req, res) {
    Comment.findOne({
        _id: req.params.commentId
    }, function (err, comment) {
        for (var i = 0; i < comment.comments.length; i++) {
            if (comment.comments[i]._id.toString() === req.params.commentId2) {
                comment.comments[i].upvotes = comment.comments[i].upvotes + 1;
                comment.save(function (err, newcomment) {
                    Comment.find(function (err, comments) {
                        var issues = []
                        for (var i = 0; i < comments.length; i++) {
                            issues.push(comments[i]);
                        }
                        res.send(issues);
                    })
                });
            }
        }
    });
})

app.listen(process.env.PORT || 9000);