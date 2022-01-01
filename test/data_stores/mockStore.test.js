import { MockStore } from 'data_stores/mockStore'
import { Card } from 'models/card'
import { MockCard } from 'mock_data/mockCard'

describe('MockStore', () => {
  const store = new MockStore()

  describe('#randomCard', () => {
    it('returns a random card', () => {
      expect(store.randomCard()).toBeInstanceOf(Card)
    })
  })

  describe('#getCard', () => {
    it('returns the specified card', () => {
      expect(store.getCard('two-of-swords')).toEqual(MockCard.twoOfSwords())
    })
  })
})
