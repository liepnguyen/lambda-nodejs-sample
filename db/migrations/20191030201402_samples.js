
exports.up = function(knex) {
  return knex.schema.createTable('samples', t => {
    t.increments('id')
    t.string('username')
    t.string('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('samples')
};
