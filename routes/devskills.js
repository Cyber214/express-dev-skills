import { Router } from 'express'

const router = Router()

// GET localhost:3000/todos
app.get('/', function(req, res) {
  res.render('devskills/index', {
    devskillss: devskills
  })
})

export { router }