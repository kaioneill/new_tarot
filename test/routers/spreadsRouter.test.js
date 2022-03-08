import 'regenerator-runtime/runtime'
import request from 'supertest'
import Express from 'express'

import { rootRouter } from 'routers/rootRouter'
import { spreadsRouter } from 'routers/spreadsRouter'

const app = new Express()
app.use('/', rootRouter)
rootRouter.use('/spreads', spreadsRouter)

describe('spreadsRouter', function () {
  it('responds to GET /spreads/random', async () => {
    request(app).get('/spreads/random').expect(200)
  })

  it('responds to POST /spreads', async () => {
    request(app)
      .post('/spreads')
      .send({
        cards: []
      })
      .expect(201)
  })
})
