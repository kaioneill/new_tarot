import express from 'express'
import { spreadRouter } from 'routers/spreadRouter'

const rootRouter = express.Router()

rootRouter.use('/spread', spreadRouter)

rootRouter.get('/', (req, res) => {})

export { rootRouter }
