const express = require('express');
const app = express();
const PORT = 4003;

app.get('/movies', (req, res) => {
    res.json(["Movie 1", "Movie 2", "Movie 3"]);
});

app.listen(PORT, () => console.log(`Catalog Service running on ${PORT}`));

