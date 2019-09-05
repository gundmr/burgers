// Dependencies
var express = require("express");
var router = express.Router();

// Import the model to use its db functions for burger.js
var burger = require("../model/burger");



// Create routes and set up logic where required.
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add new burger to the db.
router.post("/api/burger", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});


// Set burger devoured status to true.
router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete burger from db.
router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(result) {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;