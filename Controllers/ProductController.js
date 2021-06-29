import Product from '../Schemas/product.js';

class ProductController {
    async create(req, res) {
        try {
            const { sku, name, type, price } = req.body
            const product = await Product.create({ sku, name, type, price });
            res.json({id: product.id});
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getAll(req, res) {
        try {
            const products = await Product.find();
            return res.json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getOne(req, res) {
        try {
            
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new ProductController();