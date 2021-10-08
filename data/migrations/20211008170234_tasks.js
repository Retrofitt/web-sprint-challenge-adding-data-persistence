
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl=>{
        tbl.increments('task_id')
        tbl.text('task_description').notNullable()
        tbl.text('task_notes')
        tbl.boolean('task_completed').defaultTo('false')
        tbl.integer('project_id').references('project_id').inTable('projects').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
  };
