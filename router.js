import Router from 'express'
import ProductController from './Controllers/ProductController.js'

const router = Router()

router.get('/products/all/:page', ProductController.getAll)
router.get('/products/all/', ProductController.getAll)
router.get('/products/one/:id', ProductController.getOne)
router.post('/products/create', ProductController.create)
router.put('/products/update/:id', ProductController.update)
router.delete('/products/delete/:id', ProductController.delete)


export default router