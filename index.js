const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config(); // Load environment variables
app.use(express.json());

// --- Import routes ---
const authRoutes = require('./routes/authRoutes');
const storeRoutes = require('./routes/storeRoutes');
// =======================
console.log(1)

// Routes
app.use('/auth', authRoutes); // Use authRoutes for authentication
app.use("/store", storeRoutes); // Use storeRoutes for store operations

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});