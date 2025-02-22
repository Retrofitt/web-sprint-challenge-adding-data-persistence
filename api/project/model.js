
const db = require('../../data/dbConfig')

const getAll =  ()=>{
    return db("projects")
}

const getById = project_id => {
    return db("projects")
      .where('project_id', project_id)
      .first()
  }

const create = async (project)=>{
    const [id] = await db("projects")
        .insert(project)
    return getById(id)
}

module.exports = {
    getAll,
    create
}