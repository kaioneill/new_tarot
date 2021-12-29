import { Spread } from 'models/spread'
import { Card } from 'models/card'

describe("Spread", () => {
  describe("#constructor", () => {
    it('creates the spread with the correct attributes', () => {
      const date = "12/28/2021";

      const spread = new Spread(date);

      expect(spread.date).toBe(date);
      expect(spread.cards).toEqual([]);
    });
  });

  describe("#addCard", () => {
    it('adds a card to the spread', () => {
      const name = "Two of Swords";
      const suit = "Swords";
      const number = 2;
      const card = new Card(name, suit, number);

      const date = "12/28/2021";
      const spread = new Spread(date);

      spread.addCard(card);

      expect(spread.cards[0]).toBeInstanceOf(Card);
      expect(spread.cards[0].name).toBe(name);
    });
  });
});