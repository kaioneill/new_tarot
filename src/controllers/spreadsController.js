import { MockSpread } from 'mock_data/mockSpread'
import { SpreadSerializer } from 'serializers/spreadSerializer'
import { MockCard } from 'mock_data/mockCard'

const show = (req, res) => {
  // const spreadId = req.params.spreadId

  const spread = MockSpread.basicSpread()
  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
}

const pullCard = (req, res) => {
  // const spreadId = req.params.spreadId

  const spread = MockSpread.basicSpread()
  const newCard = MockCard.theSun()
  spread.addCard(newCard)

  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
}

export { show, pullCard }
