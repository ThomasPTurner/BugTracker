
exports.up = function(knex) {
  return knex.schema.createTable('bugs', bugsTable => {
      bugsTable.increments('id').primary().unique();
      bugsTable.string('title').primart().notNullable();
      bugsTable.string('body', 5000).notNullable();
      bugsTable.boolean('open').defaultsTo(true)
      bugsTable.integer('asssigned_to').defaultsTo(null).references(users.id)
      bugsTable.timestamp('created_at').defaultsTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bugs')
};
