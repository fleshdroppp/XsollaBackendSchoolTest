import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const app = express()
const PORT = 5000
const DB_URL = "mongodb+srv://user123:user123@xsollabackend.srgq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json());
app.use('/api', router);
mongoose.set('useFindAndModify', false);

async function startServer() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('Server is up on port:', PORT))
    } catch (error) {
        console.log(e);
    }
}

startServer()
