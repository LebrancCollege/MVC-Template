const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3002;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const routes = require("./controllers/router");
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});