import { CardSerializer } from 'serializers/cardSerializer'
import { Card } from 'models/card'

describe('CardSerializer', () => {
  const name = 'Two of Swords'
  const suit = 'Swords'
  const number = 2
  const reversed = false

  const card = new Card(name, suit, number, reversed)

  const cardSerializer = new CardSerializer(card)

  describe('#constructor', () => {
    it('creates the card serializer with the correct attributes', () => {
      expect(cardSerializer.card).toEqual(card)
    })
  })

  describe('#serialize', () => {
    it('correctly serializes the card', () => {
      expect(cardSerializer.serialize()).toEqual({
        name: card.name,
        suit: card.suit,
        number: card.number,
        reversed: card.reversed,
        friendlyId: card.friendlyId
      })
    })
  })
})
