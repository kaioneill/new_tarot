import { CardRepository } from 'repositories/cardRepository'
import { Card } from 'models/card'
import { MockCard } from 'mock_data/mockCard'

describe('CardRepository', () => {
  const dataStore = {
    randomCard: jest.fn()
      .mockReturnValueOnce(MockCard.theSun())
      .mockReturnValueOnce(MockCard.twoOfSwords())
      .mockReturnValueOnce(MockCard.threeOfWandsReversed())
      .mockReturnValueOnce(MockCard.theStar())
      .mockReturnValueOnce(MockCard.queenOfPentaclesReversed())
      .mockReturnValueOnce(MockCard.aceOfCups()),

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

  describe('#randomCards', () => {
    const numCards = 3
    it('returns 3 random cards', () => {
      expect(repo.randomCards(numCards)).toHaveLength(3)
    })
  })

  describe('#getCard', () => {
    it('returns the specified card', () => {
      expect(repo.getCard('two-of-swords')).toEqual(MockCard.twoOfSwords())
    })
  })
})
