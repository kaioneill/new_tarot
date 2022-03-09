import { BuildSpreadFromParamsService } from 'services/buildSpreadFromParamsService'

import * as Resolver from 'config/resolver'
import { Spread } from 'models/spread'
import { MockCard } from 'mock_data/mockCard'

describe('BuildSpreadFromParamsService', () => {
  const card = MockCard.theSun()
  const mockCardRepository = {
    byId: (id) => card
  }
  jest.spyOn(Resolver, 'resolveCardRepository').mockReturnValue(mockCardRepository)
  const cardByIdSpy = jest.spyOn(mockCardRepository, 'byId')

  const service = new BuildSpreadFromParamsService()

  const cardId = '123'
  const params = {
    spread: {
      date: '03/08/2022',
      cards_attributes: [
        {
          id: cardId
        }
      ]
    }
  }

  describe('#buildSpread', () => {
    it('returns a random spread', () => {
      expect(service.buildSpread(params)).toBeInstanceOf(Spread)
    })

    it('calls resolveCardRepository.byId', () => {
      service.buildSpread(params)
      expect(cardByIdSpy).toHaveBeenCalledWith(cardId)
    })
  })
})
