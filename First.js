const mongoose = require("mongoose");
const firstSchema = new mongoose.Schema ({
    name: String,
    password: String,
    username: String,
})
maxLength:[500, "must not exceed"];
module.exports = mongoose.model("First", firstSchema);


