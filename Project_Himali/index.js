const express = require('express');

const app = express();

const PORT = process.env.PORT || 6000;
const route = require("./route");

app.use(express.json());
app.use(route);

app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
})