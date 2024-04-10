import { Router } from 'express'
// import the Todo data
import { devskills } from '../data/devskills-data.js'

const router = Router()

// GET localhost:3000/todos
app.get('/', function(req, res) {
  res.render('devskills/index', {
    devskillss: devskills
  })
})

export { router }
