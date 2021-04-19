const express = require("express");

const app = express();

app.get("/", (request, response) => {
    let number = request.query.number
    response.send(`<h1>${number}</h1>`);
});

app.listen(3000, () => console.log("Express App is running on PORT : 3000"));