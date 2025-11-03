const express = require('express');
const app = express();
const PORT = 4004;

app.get('/recommend', (req, res) => {
    res.json(["Interstellar", "Inception", "The Dark Knight"]);
});

app.listen(PORT, () => console.log(`Recommendations running on ${PORT}`));

