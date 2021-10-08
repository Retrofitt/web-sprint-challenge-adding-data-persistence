const router = require('express').Router()
const Projects = require('./model')

router.get('/', async (req, res, next)=>{
    try{
        const projects =  await Projects.getAll()
        projects.forEach(project => {
          project.project_completed === 0 ? project.project_completed = false : project.project_completed = true
          return project
        });
        res.status(200).json(projects)
    }catch (err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
  try{
    const newProject = await Projects.create(req.body)
    newProject.project_completed === 0 ? newProject.project_completed = false : newProject.project_completed = true
    res.status(201).json(newProject)
  }catch (err){
      next(err)
  }
  })

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'Theres an error in your code.',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router
