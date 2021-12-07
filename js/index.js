const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      
      // turn card and push to pickedCards
      card.classList.add('turned');
     

      //  if picked 2, check if pair
      if (memoryGame.pickedCards.length ==2) {
        memoryGame.pairsClicked+=1;
        const paisClicked = document.getElementById('pairs-clicked');
        paisClicked.innerText = memoryGame.pairsClicked;
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];

        if (memoryGame.checkIfPair(card1, card2)) {
          // block card if it's pair
          memoryGame.pairsGuessed+=1;
          const pairsGuessed = document.getElementById('pairs-guessed');
          pairsGuessed.innerText = memoryGame.pairsGuessed;
          card1.classList.add('blocked');
          card2.classList.add('blocked');
        } else {
          //  return card if not pair
          card1.classList.remove('turned');
          card2.classList.remove('turned');
        }

        
        // empty pickedCards
        console.log(memoryGame.pickedCards);
        memoryGame.pickedCards =[];
       

      }
      memoryGame.pickedCards.push(card);
      
      
      console.log(memoryGame.pickedCards);
      console.log(`Card clicked: ${card}`);
      if (memoryGame.checkIfFinished()){
        console.log('You won!')
      }

    });



  });

});
