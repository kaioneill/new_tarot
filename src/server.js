import express from 'express'
import { rootRouter } from './routers/rootRouter'

// Constants
const PORT = 3000
const HOST = '0.0.0.0'

// App
const app = express()

app.use('/', rootRouter)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
