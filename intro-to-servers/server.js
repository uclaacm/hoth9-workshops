const express = require('express')
const app = express()
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("It worked!");
});

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});