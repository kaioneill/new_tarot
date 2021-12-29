import { index } from 'controllers/spreadsController'
import { MockSpread } from 'mock_data/mockSpread'
import { SpreadSerializer } from 'serializers/spreadSerializer'

describe('spreadsController', function () {
  describe('#index', () => {
    const req = {}
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

    const basicSpreadSpy = jest.spyOn(MockSpread, 'basicSpread')
    const spreadSerializerSpy = jest.spyOn(SpreadSerializer.prototype, 'serialize').mockReturnValue(response)

    beforeEach(() => {
      index(req, res)
    })

    it('calls fetches the spread data', () => {
      expect(basicSpreadSpy).toHaveBeenCalled()
    })

    it('calls the spread serializer', () => {
      expect(spreadSerializerSpy).toHaveBeenCalled()
    })

    it('returns the serialized spread', () => {
      expect(res.send).toHaveBeenCalledWith(response)
    })
  })
})
