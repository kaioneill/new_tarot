import express from 'express'
import { random } from 'controllers/spreadsController'

const spreadsRouter = express.Router()

spreadsRouter.get('/random', random)

export { spreadsRouter }
