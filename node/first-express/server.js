var express = require("express");
var cors = require('cors')
var uuid = require('uuid');
var app = express();


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

var bounties = [
    {
        id: uuid.v4(),
        name: "Darth",
        lastName: "Vader",
        living: "false?",
        bountyAmt: 90000,
        type: "sith"
    },
    {
        id: uuid.v4(),
        name: "Luke",
        lastName: "Skywalker",
        living: "true",
        bountyAmt: 1000000,
        type: "jedi"
    },
    {
        id: uuid.v4(),
        name: "Mace",
        lastName: "Windu",
        living: "false",
        bountyAmt: 150,
        type: "jedi"
    }
]

app.get("/bounty", function (req, res, next) {
    res.send(bounties);
})

app.get("/bounty/:id", function (req, res) {

    var bountyID = req.params.id;
    var bountyResponse = {}
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === bountyID) {
            bountyResponse.push(bounties[i]);
        }
    }

    res.send(bountyResponse);

})

app.post("/bounty", function (req, res, next) {

    var newBounty = {

        id: uuid.v4(),
        name: req.body.name,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmt: req.body.bountyAmt.toString(),
        type: req.body.type

    }

    bounties.push(newBounty);
    
    res.send(bounties);


})

app.delete("/bounty/:id", function (req, res, next) {

    var bountyID = req.params.id;
    for (var i = 0; i < bounties.length; i++) {
        if (bountyID === bounties[i].id) {
            bounties.splice(i, 1);
        }
    }

    res.send(bounties);

})

app.put("/bounty/:id", function (req, res, next) {

    var newBounty = {

        id: uuid.v4(),
        name: req.body.name,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmt: req.body.bountyAmt.toString(),
        type: req.body.type

    }

    var bountyID = req.params.id;
    for (var i = 0; i < bounties.length; i++) {
        if (bountyID === bounties[i].id) {
            bounties.splice(i, 1, newBounty);
        }
    }

    res.send(bounties);

})

app.listen(process.env.PORT || 5000);