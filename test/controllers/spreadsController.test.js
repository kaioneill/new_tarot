import { random, create } from 'controllers/spreadsController'

import * as Resolver from 'config/resolver'
import { MockSpread } from 'mock_data/mockSpread'

import { SpreadSerializer } from 'serializers/spreadSerializer'

describe('spreadsController', function () {
  const spread = MockSpread.basicSpread()

  const mockSpreadRepository = {
    randomSpread: () => spread,
    saveSpread: (spreadToSave) => spread
  }
  jest.spyOn(Resolver, 'resolveSpreadRepository').mockReturnValue(mockSpreadRepository)

  describe('#random', () => {
    const req = {
      params: {
        spreadId: '1234'
      }
    }
    const res = {
      send: jest.fn()
    }
    const response = {
      date: '12/28/2021',
      cards: [
        {
          name: 'Death'
        }
      ]
    }

    const randomSpreadSpy = jest.spyOn(mockSpreadRepository, 'randomSpread')

    const spreadSerializerSpy = jest.spyOn(SpreadSerializer.prototype, 'serialize').mockReturnValue(response)

    beforeEach(() => {
      random(req, res)
    })

    it('fetches the spread data', () => {
      expect(randomSpreadSpy).toHaveBeenCalled()
    })

    it('calls the spread serializer', () => {
      expect(spreadSerializerSpy).toHaveBeenCalled()
    })

    it('returns the serialized spread', () => {
      expect(res.send).toHaveBeenCalledWith(response)
    })
  })

  describe('#create', () => {
    const req = {
      body: {
        spread: {}
      }
    }
    const res = {
      send: jest.fn(),
      sendStatus: jest.fn(),
      statusCode: 201
    }

    const spread = MockSpread.basicSpread()

    const mockBuildSpreadFromParamsService = {
      buildSpread: (body) => spread
    }
    jest.spyOn(Resolver, 'resolveBuildSpreadFromParamsService').mockReturnValue(mockBuildSpreadFromParamsService)
    const buildSpreadSpy = jest.spyOn(mockBuildSpreadFromParamsService, 'buildSpread')

    const saveSpreadSpy = jest.spyOn(mockSpreadRepository, 'saveSpread')

    beforeEach(() => {
      create(req, res)
    })

    // TODO: this test is stupid
    it('returns a 201 status', () => {
      expect(res.statusCode).toBe(201)
    })

    it('calls resolveBuildSpreadFromParamsService.buildSpread', () => {
      expect(buildSpreadSpy).toHaveBeenCalledWith(req.body)
    })

    it('calls resolveSpreadRepository.saveSpread', () => {
      expect(saveSpreadSpy).toHaveBeenCalledWith(spread)
    })
  })
})
