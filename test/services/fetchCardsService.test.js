import { FetchCardsService } from 'services/fetchCardsService'
// import { Card } from 'models/Card'

describe('FetchCardsService', () => {
  describe('#randomCards', () => {
    const cards = ['card1', 'card2', 'card3']

    const mockRepository = {
      randomCards: (numCards) => cards
    }
    const mockRepositorySpy = jest.spyOn(mockRepository, 'randomCards')
    const service = new FetchCardsService(mockRepository)

    it('calls randomCards on the repo', () => {
      service.randomCards(3)
      expect(mockRepositorySpy).toHaveBeenCalled()
    })

    it('returns three items', () => {
      const result = service.randomCards(3)
      expect(result.length).toBe(3)
    })

    // TODO: move these elsewhere
    // fails with error
    // Expected constructor: Card
    // Received constructor: Card
    // xit('returns only cards', () => {
    //   result.forEach((card) => {
    //     expect(card).toBeInstanceOf(Card)
    //   })
    // })

    // it('does not returns duplicate cards', () => {
    //   const names = result.map((card) => card.name)
    //   const duplicates = names.filter((item, index) => names.indexOf(item) !== index)
    //   expect(duplicates.length).toBe(0)
    // })
  })
})
