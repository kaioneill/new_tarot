import express from 'express'
import { random, create } from 'controllers/spreadsController'

const spreadsRouter = express.Router()

spreadsRouter.get('/random', random)
spreadsRouter.post('/', create)

export { spreadsRouter }
