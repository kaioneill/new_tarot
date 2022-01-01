import { MockSpread } from 'mock_data/mockSpread'
import { SpreadSerializer } from 'serializers/spreadSerializer'
import { CardSerializer } from 'serializers/cardSerializer'
import { FetchRandomCardService } from 'services/FetchRandomCardService'

const show = (req, res) => {
  // const spreadId = req.params.spreadId

  const spread = MockSpread.basicSpread()
  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
}

const pullCard = (req, res) => {
  // const spreadId = req.params.spreadId

  const spread = MockSpread.basicSpread()
  const newCard = FetchRandomCardService.executeCall()
  spread.addCard(newCard)

  const response = new CardSerializer(newCard).serialize()
  res.send(response)
}

export { show, pullCard }
