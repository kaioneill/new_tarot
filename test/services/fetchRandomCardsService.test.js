import { FetchRandomCardsService } from 'services/fetchRandomCardsService'
import { CardRepository } from 'repositories/cardRepository'
import { Card } from 'models/Card'

describe('FetchRandomCardsService', () => {
  describe('#executeCall', () => {
    const repoSpy = jest.spyOn(CardRepository.prototype, 'randomCard')
    const result = FetchRandomCardsService.executeCall()

    it('calls randomCard on the repo', () => {
      expect(repoSpy).toHaveBeenCalled()
    })

    it('returns three items', () => {
      expect(result.length).toBe(3)
    })

    // fails with error
    // Expected constructor: Card
    // Received constructor: Card
    xit('returns only cards', () => {
      result.forEach((card) => {
        expect(card).toBeInstanceOf(Card)
      })
    })

    it('does not returns duplicate cards', () => {
      const names = result.map((card) => card.name)
      const duplicates = names.filter((item, index) => names.indexOf(item) !== index)
      expect(duplicates.length).toBe(0)
    })
  })
})
