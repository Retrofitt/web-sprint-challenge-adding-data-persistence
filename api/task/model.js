

const db = require('../../data/dbConfig')

const getAll =  ()=>{
    return db("tasks")
}

const getById = tasks_id => {
    return db("tasks")
      .where('tasks_id', tasks_id)
      .first()
  }

const create = async (tasks)=>{
    const [id] = await db("tasks")
        .insert(tasks)
    return getById(id)
}

module.exports = {
    getAll,
    create
}