import express from 'express'
import User from '../models/user'

const userRouter = express.Router()
userRouter.get('/user', (req, res) => {
    const user: User[] = [
        {
            id: 1,
            name: 'Ju',
            message: 'Hi'
        },
        {
            id: 2,
            name: 'Lu',
            message: 'Hello'
        }
    ]
    res.json(user)
})
userRouter.get('/user/:id', (req, res) => {
    const id: number = +req.params.id
    const user: User = {
        id: id,
        name: `Name ${id}`,
        message: `Message ${id}`
    }
    res.json(user)
})
export default userRouter