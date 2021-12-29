import { MockCard } from 'mock_data/mockCard'

describe('MockCard', () => {
  describe('#basicCard', () => {
    it('returns a basic card', () => {
      const card = MockCard.basicCard()

      expect(card.name).toBe('The Sun')
    })
  })
})
