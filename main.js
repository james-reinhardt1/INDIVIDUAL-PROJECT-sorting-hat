const wizards = [
  {
  id: 1,
  name: 'Big Jim',
  house: 'Huffle Puff',
  },
  {
  id: 2,
  name: 'Alyssa',
  house: 'Huffle Puff',
  },
  {
  id: 3,
  name: 'Gus',
  house: 'Gryffindor',
  },
  {
  id: 4,
  name: 'Leia',
  house: 'Ravenclaw',
  }
];

const voldemortArray = [
  {
    id: 1,
    name: 'Mario',
    expelled: 'expelled'
  },
  {
    id: 2,
    name: 'Luigi',
    expelled: 'expelled'
  }
];


const openingPageDiv = document.querySelector('#openingPage');
const  mainPageDiv = document.querySelector('#mainPage');
const schoolsDiv = document.querySelector ('#schools');
const studentCardsDiv = document.querySelector('#studentCards');
const goodCardsDiv = document.querySelector('#goodCards');
const badCardsDiv = document.querySelector ('#badCards');

// *** Functions
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// *** WELCOME PAGE
const startingPage = () => {
  let domString = `
  <div class="firstCard" style="width: 18rem;">
    <img src="https://aux2.iconspalace.com/uploads/447401561.png" class="card-img-top" alt="Sorting Hat">
    <div class="firstCard-body">
      <h5 class="talkingSortingHat">Welcome! Lets make you a wizard!</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" id="welcomeBtn" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
renderToDom('#openingPage', domString);
}

// *** FORM TO ENTER IN STUDENT NAME ALONG WITH BUTTONS 
const sortingForm = () => {
  const domString =
  `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter name below</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">And we'll find out what school is best for you!</div>
  </div>
  <button type="submit" class="btn btn-primary">Lets wiz!</button>
  <div>
    <button type="button" class="btn btn-primary">Gryffindor</button>
    <button type="button" class="btn btn-secondary">Slytherin</button>
    <button type="button" class="btn btn-success">Ravenclaw</button>
    <button type="button" class="btn btn-danger">Hufflepuff</button>
    <button type="button" class="btn btn-warning">Army of Darkness</button>
    <button type="button" class="btn btn-info">All</button>
  </div>
</form>`
}



// *** Renders current students onto DOM
const cardsOnDom = (array) => {
  let domString = "";
  for (const wizards of array) {
    
    domString += `
  <div class="card" style="width: 18rem;">
    <h5 class="card-header">${wizards.name.toUpperCase()}</h5>
    <p class="list-group-item pet-color card">${wizards.house.toUpperCase()}</p>
    <button class="btn btn-success" id="delete--${wizards.id}">
    Expell </button>
  </div> `;
  };


  const filter = (array, typeString) => {
    const typeArray = [];
  // *** Goes through array and adds ?new student?
  for (const member of array) {
    if (member.type === typeString) {
      typeArray.push(member);
    }
  };






// *** Populates DOM with HTML when button on welcome card is pressed
const secondPage = () => {
  const domString =

}


// *** MAIN PAGE
const mainSite = => {
  let domString = `
  `
}

landingPage.style.display = 'none';
renderToDom('#', domString);

// *** Populate DOM with HTML when button on welcome card is pressed THIS IS YOUR SORTING PAGE, NOT WELCOME. ****COME BACK TO THIS!!!!!!
const fillPage = () => {
  const bootstrapCardString = 
  `<button type="button" class="btn btn-success btn-lg">Getting Wizard with it</button>`
}

// *** PUTS THE CARDS IN DIFFERENT DIVS
const cardsInDivs = (arr, div) => {
  const domString = '';
  for ( of arr) {
    if (wizards.type === 'student') {
      domString += ``
    }
  }
}

welcomeDiv.addEventListener('click', e =>{
  if (e.target.id)
})






// *** Creates a new student card
page.addEventListener('submit', newStudent)
//  *** Filters for the House Buttons
page.addEventListener('click', houseFilter)

// *** Initial Page Loadout
const startApp = () => {
  welcomeCard();
}

startApp();
