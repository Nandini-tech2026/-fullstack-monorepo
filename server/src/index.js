require('dotenv').config();
const express = require('express');
const healthRouter = require('../routes/health');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/health', healthRouter);

app.listen(PORT, () => {
  console.log(Server running on http ://localhost:${PORT})
});

module.exports = app;