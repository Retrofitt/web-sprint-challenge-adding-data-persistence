
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', tbl=>{
        tbl.increments()
        tbl.integer('project_id').references('project_id').inTable('projects').notNullable()
        tbl.integer('resource_id').references('resource_id').inTable('resources').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
};
