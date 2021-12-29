import express from 'express'
import { MockSpread } from 'mock_data/mockSpread'

const app = express()

app.get('/', (req, res) => {
  res.send(MockSpread.basic_spread)
})
