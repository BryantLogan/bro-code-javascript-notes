// anonymous objects =  Objects without a name
//                      Not directly referenced
//                      Less syntax. No need for unique names


class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

// new Card("A", "hearts");
// new Card("A", "spades");
// new Card("A", "diamonds");
// new Card("A", "clubs");
// new Card("2", "hearts");
// new Card("2", "spades");
// new Card("2", "diamonds");
// new Card("2", "clubs");

let cards =     [new Card("A", "hearts"),
                new Card("A", "spades"),
                new Card("A", "diamonds"),
                new Card("A", "clubs"),
                new Card("2", "hearts"),
                new Card("2", "spades"),
                new Card("2", "diamonds"),
                new Card("2", "clubs")];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));