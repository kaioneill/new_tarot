import express from 'express'
import { index } from 'controllers/spreadsController'

const spreadsRouter = express.Router()

spreadsRouter.get('/', index)

export { spreadsRouter }
