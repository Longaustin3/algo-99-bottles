function bottleSong() {
  // Write your code here!
  for (let i = 99; i > 0; --i) {
    let currNum = i;
    let newNum = i - 1;
    if (i > 2) {
      console.log(`${currNum} bottles of beer on the wall, ${currNum} bottles of beer. 
Take one down and pass it around, ${newNum} bottles of beer on the wall.`)
    } else if (i === 2) {
      console.log(`${currNum} bottles of beer on the wall, ${currNum} bottles of beer. 
Take one down and pass it around, ${newNum} bottle of beer on the wall.`)
    } else if (i === 1) {
      console.log(`${currNum} bottle of beer on the wall, ${currNum} bottle of beer. 
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`)
    } else {
      break;
    }
  }
};

bottleSong(); 