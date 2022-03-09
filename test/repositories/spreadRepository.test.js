import { SpreadRepository } from 'repositories/spreadRepository'
import * as Resolver from 'config/resolver'
import { Spread } from 'models/spread'
import { MockSpread } from 'mock_data/mockSpread'

describe('SpreadRepository', () => {
  const repo = new SpreadRepository()
  const spread = MockSpread.basicSpread()

  describe('#randomSpread', () => {
    const mockFetchCardsService = {
      randomCards: (numCards) => spread
    }
    jest.spyOn(Resolver, 'resolveFetchCardsService').mockReturnValue(mockFetchCardsService)
    const randomCardsSpy = jest.spyOn(mockFetchCardsService, 'randomCards')

    it('calls resolveFetchCardService.randomCards', () => {
      repo.randomSpread()
      expect(randomCardsSpy).toHaveBeenCalled()
    })

    it('returns a random spread', () => {
      expect(repo.randomSpread()).toBeInstanceOf(Spread)
    })
  })
})
