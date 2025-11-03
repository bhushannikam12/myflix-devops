const express = require('express');
const app = express();
const PORT = 4002;

app.get('/profile', (req, res) => {
    res.json({ name: "Bhushan", plan: "Premium" });
});

app.listen(PORT, () => console.log(`User Service running on ${PORT}`));

