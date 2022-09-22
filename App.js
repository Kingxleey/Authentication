const express = require ("express");

const tasks = require("./router/tasks.js");
const app = require ("express");

//middleware
app.use(express.json());

app.get('/login', (req, res) => {
    res.send ('Task manager app')
})
app.use("/api/v1/tasks", tasks)
 module.exports = App