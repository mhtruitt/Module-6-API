const pool = require("./database");
const queries = require("./queries");

//Get All Data
const getInventory = (req, res) => {
    pool.query(queries.getInventory, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};



//Get Data by Param
//Add New Data by Param
//Modify Data by Param

module.exports = {
    getInventory,
};
