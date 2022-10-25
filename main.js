const wizardsArray = [
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
    name: ''
  }
]

const openingPageDiv = document.querySelector('#openingPage');
const  mainPageDiv = document.querySelector('#mainPage');
const schoolsDiv = document.querySelector ('#schools');
const studentCardsDiv = document.querySelector('#studentCards');
const goodCardsDiv = document.querySelector('#goodCards');
const badCardsDiv = document.querySelector ('#badCards');


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const startingPage = () => {
  const bootstrapCardString = `<div class="firstCard" style="width: 18rem;">
  <img src="https://aux2.iconspalace.com/uploads/447401561.png" class="card-img-top" alt="Sorting Hat">
  <div class="firstCard-body">
    <h5 class="talkingSortingHat">Welcome! Lets make you a wizard!</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}

const 
