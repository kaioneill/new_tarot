import { random } from 'controllers/spreadsController'
import { SpreadRepository } from 'repositories/spreadRepository'
import { SpreadSerializer } from 'serializers/spreadSerializer'

describe('spreadsController', function () {
  const res = {
    send: jest.fn()
  }

  describe('#random', () => {
    const req = {
      params: {
        spreadId: '1234'
      }
    }
    const response = {
      date: '12/28/2021',
      cards: [
        {
          name: 'Death'
        }
      ]
    }

    const randomSpreadSpy = jest.spyOn(SpreadRepository.prototype, 'randomSpread')
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
})
