const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { diagnoseSymptoms } = require('./symptomChecker');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

// AI-powered symptom checker route
app.post('/check-symptoms', (req, res) => {
    const symptoms = req.body.symptoms;
    const diagnosis = diagnoseSymptoms(symptoms);
    res.json({ diagnosis });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
