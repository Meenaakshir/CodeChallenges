let suits = ["club","diamond","hearts","spades"];
let cardnumber = ["A","K","Q","J","S","1","2","3","4","5","6","7","8","9","10"];
let deck = [];

suits.forEach(s => {
    
    cardnumber.forEach(c => {
       
        deck.push({suits:s,cardnumber:c})
    });
    
});
 console.log(deck);
function shuffle(array) {
  array.sort(() => Math.random()*52 - 0.5);
}

/*function random(arr)
{
    arr.sort(() => Math.random() - 0.5);
    
}*/
shuffle(deck);
function display()
{
    let randomIndex = random();
    console.log(deck[randomIndex]);
}
console.log(deck[0]);

for(i=0;i<deck.length;i++)
{
    shuffle(deck);
    deck.pop();
}