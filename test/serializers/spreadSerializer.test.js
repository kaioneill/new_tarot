import { SpreadSerializer } from 'serializers/spreadSerializer'
import { MockSpread } from 'mock_data/mockSpread'

describe('SpreadSerializer', () => {
  const spread = MockSpread.basicSpread()
  const card1 = spread.cards[0]
  const card2 = spread.cards[1]
  const card3 = spread.cards[2]

  const spreadSerializer = new SpreadSerializer(spread)

  describe('#constructor', () => {
    it('creates the spread serializer with the correct attributes', () => {
      expect(spreadSerializer.spread).toEqual(spread)
    })
  })

  describe('#serialize', () => {
    it('correctly serializes the spread', () => {
      expect(spreadSerializer.serialize()).toEqual({
        date: spread.date,
        cards: [
          {
            name: card1.name,
            suit: card1.suit,
            number: card1.number,
            reversed: card1.reversed,
            friendlyId: card1.friendlyId
          }, {
            name: card2.name,
            suit: card2.suit,
            number: card2.number,
            reversed: card2.reversed,
            friendlyId: card2.friendlyId
          }, {
            name: card3.name,
            suit: card3.suit,
            number: card3.number,
            reversed: card3.reversed,
            friendlyId: card3.friendlyId
          }
        ]
      })
    })
  })
})
