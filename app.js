const express = require("express");
      app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    console.log("eqeqe");
    res.render("landing");
});

app.get("/test", (req, res) => {
    res.send("trololo");
})

app.listen(process.env.PORT, process.env.IP);