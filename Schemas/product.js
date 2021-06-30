import mongoose from 'mongoose'

const Product = {
    sku: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required: true, min: 0}
}

export default mongoose.model('Product', Product)