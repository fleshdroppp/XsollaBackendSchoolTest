import Product from '../Schemas/product.js';
import mongoose from 'mongoose';

class ProductController {
    async create(req, res) {
        try {
            const { sku, name, type, price } = req.body
            const product = await Product.create({ sku, name, type, price })
            res.json({id: product.id})
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
        try {
            const products = await Product.find()
            return res.json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            let product = {};
            if (mongoose.isValidObjectId(req.params.id)) {
                product = await Product.findById(req.params.id)
            } else {
                product = await Product.findOne({sku: req.params.id})
            }
            return res.json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new ProductController();