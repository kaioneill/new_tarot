import { CardRepository } from 'repositories/cardRepository'
import { Card } from 'models/card'
import { MockCard } from 'mock_data/mockCard'

describe('CardRepository', () => {
  const dataStore = {
    randomCard: jest.fn().mockReturnValue(MockCard.theSun()),
    getCard: jest.fn().mockReturnValue(MockCard.twoOfSwords())
  }
  const repo = new CardRepository(dataStore)

  describe('#constructor', () => {
    it('has the correct attributes', () => {
      expect(repo.dataStore).toBeDefined()
    })
  })

  describe('#randomCard', () => {
    it('returns a random card', () => {
      expect(repo.randomCard()).toBeInstanceOf(Card)
    })
  })

  describe('#getCard', () => {
    it('returns the specified card', () => {
      expect(repo.getCard('two-of-swords')).toEqual(MockCard.twoOfSwords())
    })
  })
})
