const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the "assets" folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});