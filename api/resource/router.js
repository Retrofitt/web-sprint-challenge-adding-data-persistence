const router = require('express').Router()
const Resources = require('./model')

router.get('/', async (req, res, next)=>{
    try{
        const resources =  await Resources.getAll()

        res.status(200).json(resources)
    }catch (err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
      const newResource = await Resources.create(req.body)
      res.status(201).json(newResource)
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
