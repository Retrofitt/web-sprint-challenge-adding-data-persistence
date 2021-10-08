

const db = require('../../data/dbConfig')

const getAll =  ()=>{
    return db("tasks as t")
        .leftJoin("projects as p", "t.project_id", "p.project_id")
        .select("t.*", "p.project_name", "p.project_description")
}

const getById = task_id => {
    return db("tasks")
      .where('task_id', task_id)
      .first()
  }

const create = async (task)=>{
    const [id] = await db("tasks")
        .insert(task)
    return getById(id)
}

module.exports = {
    getAll,
    create
}