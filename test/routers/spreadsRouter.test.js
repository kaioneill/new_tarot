import 'regenerator-runtime/runtime'
import request from 'supertest'
import Express from 'express'

import { rootRouter } from 'routers/rootRouter'
import { spreadsRouter } from 'routers/spreadsRouter'

const app = new Express()
app.use('/', rootRouter)
rootRouter.use('/', spreadsRouter)

describe('spreadsRouter', function () {
  it('responds to /spreads', async () => {
    const res = await request(app).get('/spreads')
    expect(res.statusCode).toBe(200)
  })
})
