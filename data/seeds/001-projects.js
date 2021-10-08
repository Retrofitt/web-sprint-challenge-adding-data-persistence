
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name:'Test project 1',
          project_description:'Project test description',
          project_completed: false
        },{
          project_name:'Test project 2',
          project_description:'Project test description',
          project_completed: true
        }
      ]);
    });
};
