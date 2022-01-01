import { show, pullCard } from 'controllers/spreadsController'
import { MockSpread } from 'mock_data/mockSpread'
import { SpreadSerializer } from 'serializers/spreadSerializer'
import { CardSerializer } from 'serializers/cardSerializer'
import { FetchRandomCardService } from 'services/FetchRandomCardService'
import { Card } from 'models/card'

describe('spreadsController', function () {
  const res = {
    send: jest.fn()
  }

  describe('#show', () => {
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

    const basicSpreadSpy = jest.spyOn(MockSpread, 'basicSpread')
    const spreadSerializerSpy = jest.spyOn(SpreadSerializer.prototype, 'serialize').mockReturnValue(response)

    beforeEach(() => {
      show(req, res)
    })

    it('fetches the spread data', () => {
      expect(basicSpreadSpy).toHaveBeenCalled()
    })

    it('calls the spread serializer', () => {
      expect(spreadSerializerSpy).toHaveBeenCalled()
    })

    it('returns the serialized spread', () => {
      expect(res.send).toHaveBeenCalledWith(response)
    })
  })

  describe('#pullCard', () => {
    const req = {
      params: {
        spreadId: '1234'
      }
    }

    const card = new Card('The Sun', 'major', 19, false)
    const response = {
      name: card.name,
      suit: card.suit,
      number: card.number,
      reversed: card.reversed,
      friendlyId: card.friendlyId
    }

    const basicSpreadSpy = jest.spyOn(MockSpread, 'basicSpread')
    const fetchCardSpy = jest.spyOn(FetchRandomCardService, 'executeCall').mockReturnValue(card)
    const cardSerializerSpy = jest.spyOn(CardSerializer.prototype, 'serialize').mockReturnValue(response)

    beforeEach(() => {
      pullCard(req, res)
    })

    it('fetches the spread data', () => {
      expect(basicSpreadSpy).toHaveBeenCalled()
    })

    it('fetches a random card', () => {
      expect(fetchCardSpy).toHaveBeenCalled()
    })

    it('calls the spread serializer', () => {
      expect(cardSerializerSpy).toHaveBeenCalled()
    })

    it('returns the serialized spread', () => {
      expect(res.send).toHaveBeenCalledWith(response)
    })
  })
})
