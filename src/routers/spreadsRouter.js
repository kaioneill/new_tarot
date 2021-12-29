import express from 'express'
import { show, addCard } from 'controllers/spreadsController'

const spreadsRouter = express.Router()

spreadsRouter.get('/:spreadId', show)

spreadsRouter.get('/:spreadId/add_card', addCard)

export { spreadsRouter }
