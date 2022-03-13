const express = require("express");
const serverless = require("serverless-http");
const datastore = require("nedb");
const app = express()
const database = new datastore("epicshelter.db")
database.loadDatabase()
const router = express.Router();
router.post("/data_in", (req,res) => {
    var us_req = (req.body)
    database.insert(us_req)
    res.end()
})
router.get("/data_out", (req,res) => {
    database.find({}, (err, data) => {
        res.json(data)
    })
})
app.use("/.netlify/functions/index", router);
module.exports.handler = serverless(app);