import { FetchRandomCardService } from 'services/FetchRandomCardService'
import { CardRepository } from 'repositories/cardRepository'
import { Card } from 'models/Card'

describe('FetchRandomCardService', () => {
  describe('#executeCall', () => {
    let result
    const repoSpy = jest.spyOn(CardRepository.prototype, 'randomCard').mockReturnValue(new Card('The Sun', 'major', 19, false))

    beforeEach(() => {
      result = FetchRandomCardService.executeCall()
    })

    it('calls randomCard on the repo', () => {
      expect(repoSpy).toHaveBeenCalled()
    })

    it('returns a card', () => {
      expect(result).toBeInstanceOf(Card)
    })
  })
})
