class Card {
  constructor(name, suit, number) {
    this.name = name;
    this.suit = suit;
    this.number = number;
    this.friendlyId = name.toLowerCase().replace(/\s/g , "-");
  };
};

export { Card };