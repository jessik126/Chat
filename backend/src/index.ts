import express from 'express'
import userRouter from './routers/user-router'

// Server
const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()
const cors = require('cors');

// Cors
app.use(cors({
    origin: ['http://localhost:3000'] //frontend
}))

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Welcome!')
})

// Routes
app.use('/api', userRouter)
app.use((req, res) => {
    res.status(404)
})


// Start server
app.listen(PORT, () => {
    console.log(`Working server: ${HOSTNAME}:${PORT}`)
})