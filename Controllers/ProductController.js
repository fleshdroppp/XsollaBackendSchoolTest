import Product from '../Schemas/product.js';
import mongoose from 'mongoose';
import e from 'express';

class ProductController {
    async create(req, res) {
        try {
            const { sku, name, type, price } = req.body
            const product = await Product.create({ sku, name, type, price })
            return res.json({ id: product.id })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const limit = 10
            let products = []
            let page = Number(req.params.page)
            if (page === undefined) {
                products = await Product.find()
            } else if (page >= 0) {
                products = await Product.find().skip(limit * page).limit(limit)
            } else {
                return res.status(400).json("Not valid page!")
            }
            return res.json(products || "Empty array of items!")
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            let product = {}
            if (mongoose.isValidObjectId(req.params.id)) {
                product = await Product.findById(req.params.id)
            } else {
                product = await Product.findOne({ sku: req.params.id })
            }
            return res.json(product || "Can't find item!")
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            let newData = req.body
            let product = {}
            if (!newData.sku) {
                if (mongoose.isValidObjectId(req.params.id)) {
                    product = await Product.findByIdAndUpdate(req.params.id, newData, { new: true, runValidators: true, context: 'query' })
                } else {
                    product = await Product.findOneAndUpdate({ sku: req.params.id }, newData, { new: true, runValidators: true, context: 'query' })
                }
            } else {
                return res.status(400).json("Can't update SKU field!")
            }
            return res.json(product || "Can't find item by ID or SKU!")
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            let product = {}
            if (mongoose.isValidObjectId(req.params.id)) {
                product = await Product.findByIdAndDelete(req.params.id)
            } else {
                product = await Product.findOneAndDelete({ sku: req.params.id })
            }
            return res.json(product || "Can't delete product!")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new ProductController();