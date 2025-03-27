const { Client } = require('pg');
  require('dotenv').config();

  const client = new Client({
      connectionString: process.env.DATABASE_URL,
  });

  async function testConnection() {
      try {
          await client.connect();
          const res = await client.query('SELECT NOW()');
          console.log('Database connection successful:', res.rows[0]);
          await client.end();
      } catch (err) {
          console.error('Database connection error:', err);
      }
  }

  testConnection();