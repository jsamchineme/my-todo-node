const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    use_env_variable: 'DEV_URL',
    url: process.env.DEV_URL,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'TEST_URL',
    url: process.env.TEST_URL,
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'todos_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
  }
};
