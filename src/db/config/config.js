require('dotenv').config()

module.exports = {
  development: {
    url: process.env.PGURL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.PGURL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.PGURL,
    dialect: 'postgres',
  },
}