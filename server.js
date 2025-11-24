const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());

// API endpoint to get a greeting
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to the demo project.` });
});

// API endpoint to calculate factorial
app.get('/api/factorial/:number', (req, res) => {
  const num = parseInt(req.params.number);
  
  if (isNaN(num) || num < 0) {
    return res.status(400).json({ error: 'Please provide a valid non-negative number' });
  }
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  
  res.json({ number: num, factorial: result });
});

// Root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
