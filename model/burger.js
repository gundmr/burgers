//DONE - SHOULD BE WORKING,


// Import orm.js into burger.js
var orm = require("../config/orm");

//create the code that will call the ORM functions using burger specific input for the ORM.

//Burger object
var burger = {
    //pulls all burger entries from teh table
    selectAll: function (cb) {
        orm.selectAll('burger', function (res) {
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne('burger', cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burger', objColVals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.delete("burger", condition, function (res) {
            cb(res);
        });
    }
};


//export DB
module.exports = burger;