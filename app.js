const express = require('express');
const path = require('path');
const app = express();
const port = 3009;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Sample driver data
const drivers = [
    { name: 'Lewis Hamilton', team: 'Mercedes', country: 'United Kingdom', image: 'hamilton.jpg' },
    { name: 'Max Verstappen', team: 'Red Bull Racing', country: 'Netherlands', image: 'verstappen.jpg' },
    { name: 'Charles Leclerc', team: 'Ferrari', country: 'Monaco', image: 'leclerc.jpg' },
    { name: 'Sebastian Vettel', team: 'Aston Martin', country: 'Germany', image: 'vettel.jpg' },
    { name: 'Daniel Ricciardo', team: 'AlphaTauri', country: 'Australia', image: 'ricciardo.jpg' }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { drivers });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
