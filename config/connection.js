const development = {
  database: 'crypto',
  username: 'monte',
  password: '88888888',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
};

const testing = {
  database: 'crypto',
  username: 'monte',
  password: '88888888',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  port: 5432,
};

module.exports = {
  development,
  testing,
  production,
};
