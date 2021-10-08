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



module.exports = router
