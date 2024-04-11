import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'

const router = Router()

// GET localhost:3000/devskillss
router.get('/', devskillsCtrl.index)

router.get('/new', devskillsCtrl.new)

export { router }
