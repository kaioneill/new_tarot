import express from 'express'
import { spreadsRouter } from 'routers/spreadsRouter'

const rootRouter = express.Router()

rootRouter.use('/spreads', spreadsRouter)

rootRouter.get('/', (req, res) => {})

export { rootRouter }
