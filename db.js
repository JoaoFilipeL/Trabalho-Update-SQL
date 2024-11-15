const { Pool } = require('pg');

const pool = new Pool({
  user: 'usuario',         
  host: 'localhost',            
  database: 'AulaUpdate', 
  password: 'root',        
  port: 5432,                   
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
