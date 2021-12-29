import express from 'express'
import { MockSpread } from 'mock_data/mockSpread'
import { SpreadSerializer } from 'serializers/spreadSerializer'

const spreadRouter = express.Router()

spreadRouter.get('/', (req, res) => {
  const spread = MockSpread.basicSpread()
  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
})

export { spreadRouter }
