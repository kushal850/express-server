import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/about", (req, res) => {
    res.send("about us");
});

app.get("/contact", (req, res) => {
    res.send("myno");
});

app.listen(port, () => {
    console.log('server running on port ', + port );
})