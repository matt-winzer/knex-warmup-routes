module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/knex-warmup'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
