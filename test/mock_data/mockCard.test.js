import { MockCard } from 'mock_data/mockCard'

describe('MockCard', () => {
  describe('#theSun', () => {
    it('returns the sun', () => {
      const card = MockCard.theSun()

      expect(card.name).toBe('The Sun')
    })
  })

  describe('#twoOfSwords', () => {
    it('returns the sun', () => {
      const card = MockCard.twoOfSwords()

      expect(card.name).toBe('Two of Swords')
    })
  })
})
