import express  from 'express';
import bodyParser from 'body-parser';

import * as pool from './db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/api', (req, res) => {
  res.send('API is running version 1.0.0');
});

app.get('/dbcheck', async (req, res) => {
  try {

    const result =  await pool.default.query('SELECT * FROM despesa');
    res.json({ databaseTime: result.rows[0] });

  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Database connection error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;