
exports.up = function(knex) {
  return knex.schema.createTable('users' , usersTable => {
      usersTable.increments('id').primary().unique();
      usersTable.string('name').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
