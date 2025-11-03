const express = require('express');
const app = express();
const PORT = 4001;

app.get('/login', (req, res) => {
    res.json({ status: "success", user: "Bhushan", token: "abcd1234" });
});

app.listen(PORT, () => console.log(`Auth Service running on ${PORT}`));

