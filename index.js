// Code your solutions in this file
let thankYous = []

function writeCards(person, occasion) {
  for (let i = 0; i < person.length; i++) {
    thankYous << console.log(`Thank you, ${person[i]} for the wonderful ${occasion} gift!`);
  }
  return thankYous
}
