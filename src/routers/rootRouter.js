import express from 'express'
import { MockSpread } from '../mock_data/mockSpread'
import { SpreadSerializer } from '../serializers/spreadSerializer'

const rootRouter = express.Router()

rootRouter.get('/', (req, res) => {
  const spread = MockSpread.basicSpread()
  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
})

export { rootRouter }
