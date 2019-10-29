import knex from 'knex';

const db = knex({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'localdbpass',
    database : 'shout_qa1'
  }
});

export const get = async (req, res) => {
  const results = await db('users').where('email', 'namvpham@kms-technology.com');

  res.send({
    message: 'OK',
    results
  })
}