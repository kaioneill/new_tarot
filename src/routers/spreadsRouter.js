import express from 'express'
import { show, pullCard } from 'controllers/spreadsController'

const spreadsRouter = express.Router()

spreadsRouter.get('/:spreadId', show)

spreadsRouter.get('/:spreadId/pull_card', pullCard)

// spreadsRouter.get('/:spreadId/add_card/:cardId', () => {})

export { spreadsRouter }
