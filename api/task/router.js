const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req, res, next)=>{
    try{
        const tasks =  await Tasks.getAll()
        tasks.forEach(task => {
            task.task_completed === 0 ? task.task_completed = false : task.task_completed = true
            return task
        });
        res.status(200).json(tasks)
    }catch (err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
      const newTask = await Tasks.create(req.body)
      newTask.task_completed === 0 ? newTask.task_completed = false : newTask.task_completed = true
      res.status(201).json(newTask)
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
