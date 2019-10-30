module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    migrations: {
      directory: './db/migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './db/seeds/prod'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    }
  }

};
