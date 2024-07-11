const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { ConnectMongoDB } = require('./Connection/connection');
const userRouter = require('./Routes/user.routes');

// Connect to MongoDB
ConnectMongoDB("mongodb://127.0.0.1:27017/Userdb")
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/api/users', userRouter);
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
