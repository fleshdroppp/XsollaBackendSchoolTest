import Router from 'express'
import ProductController from './Controllers/ProductController.js'

const router = Router()

router.get('/products', ProductController.getAll)
router.get('/products/:id', ProductController.getOne)
router.post('/products', ProductController.create)

export default router