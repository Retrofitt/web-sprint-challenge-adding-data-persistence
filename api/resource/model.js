
const db = require('../../data/dbConfig')

const getAll =  ()=>{
    return db("resources")
}

const getById = resource_id => {
    return db("resources")
      .where('resource_id', resource_id)
      .first()
  }

const create = async (resource)=>{
    const [id] = await db("resources")
        .insert(resource)
    return getById(id)
}

module.exports = {
    getAll,
    create
}