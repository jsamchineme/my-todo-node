const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    use_env_variable: 'DEV_URL',
    url: 'postgres://cavewpwl:UNdoQyxMkVO-hOD25m2Hzq7wwWtcQ8Vm@pellefant.db.elephantsql.com:5432/cavewpwl',
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'TEST_URL',
    url: process.env.TEST_URL,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'TEST_URL',
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  }
};
