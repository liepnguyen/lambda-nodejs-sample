exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('samples')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('samples').insert([
        { id: 1, email: 'liepnguyen.it@gmail.com' },
        { id: 2, email: 'liepnguyen.it@gmail.com' },
        { id: 3, email: 'liepnguyen.it@gmail.com' },
      ]);
    });
};
