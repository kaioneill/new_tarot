import 'regenerator-runtime/runtime'
import request from 'supertest'
import Express from 'express'

import { rootRouter } from 'routers/rootRouter'
import { spreadsRouter } from 'routers/spreadsRouter'

const app = new Express()
app.use('/', rootRouter)
rootRouter.use('/', spreadsRouter)

describe('spreadsRouter', function () {
  const spreadId = '1234'
  it('responds to /spreads/:spreadId', async () => {
    const res = await request(app).get(`/spreads/${spreadId}`)
    expect(res.statusCode).toBe(200)
  })

  it('responds to /spreads/:spreadId/pull_card', async () => {
    const res = await request(app).get(`/spreads/${spreadId}/pull_card`)
    expect(res.statusCode).toBe(200)
  })

  // it('responds to /spreads/:spreadId/add_card/:cardId', async () => {
  //   const cardId = '2345'
  //   const res = await request(app).get(`/spreads/${spreadId}/pull_card/${cardId}`)
  //   expect(res.statusCode).toBe(200)
  // })
})
