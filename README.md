# lambda-nodejs-sample
A simple scaffold serverless application for showing database connection and management on AWS Lambda.

## What's included
- `serverless` - Serverless framework
- `mysql2` - MySQL client
- `knex` - Query builder
- `objection` - ORM built upon Knex
- `express` - API framework

## How to use it

- Install required node packages:
```npm install```

- Install serverless CLI
```npm install -g serverless```

- To run at local:
```serverless offline```

- Install knex to generate migration scripts or seeds:
```npm install -g knex```

- Generate a migration script:
```knex migrate:make users```

- Generate a seed script:
```knex seed:make users```

Read the migration section from [knex's doc](https://knexjs.org/#Migrations) for more information

