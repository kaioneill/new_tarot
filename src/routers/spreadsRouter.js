import express from 'express'
import { show } from 'controllers/spreadsController'

const spreadsRouter = express.Router()

spreadsRouter.get('/:spreadId', show)

export { spreadsRouter }
