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
    house: 'expelled'
  },
  {
    id: 2,
    name: 'Luigi',
    house: 'expelled'
  }
];

// declaring as a variable. 
const openingPageDiv = document.querySelector('#openingPage');
const mainPageDiv = document.querySelector('#mainPage');
const schoolsDiv = document.querySelector('#schools');
const studentCardsDiv = document.querySelector('#studentCards');
const goodCardsDiv = document.querySelector('#goodCards');
const badCardsDiv = document.querySelector('#badCards');
const welcomeBtn = document.querySelector('#welcomeBtn');
const schoolButtons = document.querySelector('#schoolButtons');

// *** Functions    (divID) Whatever Div I'm targeting        (textToRender) Looking for string of HTML
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


const filter = (array, typeString) => {
  const typeArray = []; //Filters terms with specific types. Container for the array you push

  for (const member of array) { // member and array are parameters
    if (member.house === typeString) { // if the house the same as whatever you call as your second parameter
      typeArray.push(member); // pushes the object to the type array
    }
  }; //Goes through array and adds qualifying member to array

  return typeArray;
};

const cardsOnDom = (array) => {
  let studentString = ""
  for (const wizard of array) { // =+ adds to student string container without overwriting what you have in it. delte button id is wizard id so you can figure out which wizard to remove
    studentString += ` 
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${wizard.name}</h5>
      <p class="card-text">${wizard.house}</p>
      <button id=${wizard.id} class="btn btn-primary">Expelled</button>
    </div>
  </div>`
  }
  renderToDom('#goodCards', studentString)
}

const removeItemOnce = (arr, value) => { // 
  let index = arr.indexOf(value); // out of the box array method to get index of something in an array. objects in this case
  if (index > -1) {
    arr.splice(index, 1); // at x index, remove one item
  }
  return arr;
}
goodCardsDiv.addEventListener('click', event => {
  for (const wizard of wizards) {
    if (parseInt(event.target.id) === wizard.id) { // have to parseInt because id was a string not integer, so logic was never true
      voldemortArray.push(wizard);// pushes the wizard with that id to voldemort array
      removeItemOnce(wizards, wizard) // calls function to remove the index of this wizard from wizards array
      badCardsOnDom(voldemortArray) // re-render bad cards because you just added one. dom needs to reflect update
      cardsOnDom(wizards) // re render good cards because you just removed one
    }
  };
});


const badCardsOnDom = (array) => {
  let studentString = ""
  for (const member of array) {
    studentString += `
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${member.house}</p>
      <button id=${member.id} class="btn btn-primary">Expelled</button>
    </div>
  </div>`
  }
  renderToDom('#badCards', studentString)
}
let studentsArray = wizards // conatiner for wizards. overwritten by filtering

mainPageDiv.addEventListener('click', event => {
  if (event.target.id === "allBtn") {
    studentsArray = wizards; //
    cardsOnDom(studentsArray)
  };
  if (event.target.id === "ravenclawBtn") {
    studentsArray = filter(wizards, 'Ravenclaw'); // array == wizards and typestring == ravenclaw . overwrites studentsArray
    cardsOnDom(studentsArray)
  };
  if (event.target.id === "gryffindorBtn") {
    studentsArray = filter(wizards, 'Gryffindor');
    cardsOnDom(studentsArray)
  };
  if (event.target.id === "hufflepuffBtn") {
    studentsArray = filter(wizards, 'Huffle Puff');
    cardsOnDom(studentsArray)
  };
  if (event.target.id === "slytherinBtn") {
    studentsArray = filter(wizards, 'Slytherin');
    cardsOnDom(studentsArray)
  };

  if (event.target.id === "armyOfDarknessBtn") {
    studentsArray = [] // empties students array because you only want to show army of darkness
    cardsOnDom(studentsArray) // populates the good card div with the array of students
    badCardsOnDom(voldemortArray) // populates the bad card div with the voldemort array
  };


});

// *** WELCOME PAGE
const startingPage = () => {
  let domString = `
  <div class="firstCard" style="width: 18rem;">
    <img src="https://aux2.iconspalace.com/uploads/447401561.png" class="card-img-top" alt="Sorting Hat">
    <div class="firstCard-body">
      <h5 class="talkingSortingHat">Welcome! Lets make you a wizard!</h5>
      <p class="card-text">Lets get wizarding!</p>
      <a href="#" id="welcomeBtn" class="btn btn-primary">LETS GO!</a>
    </div>
  </div>`;
  renderToDom('#openingPage', domString);
}

// *** FORM TO ENTER IN STUDENT NAME ALONG WITH BUTTONS 
const sortingForm = () => {
  let domString =
    `<form id= "nameEntry">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter name below</label>
    <input type="name" class="form-control" id="name" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">And we'll find out what school is best for you!</div>
  </div>
  <button id="newStudent" type="submit" class="btn btn-primary">Wizard time!</button>
  <div id="schoolButtons">
    <button type="button" id="gryffindorBtn" class="btn btn-primary">Gryffindor</button>
    <button type="button" id="slytherinBtn" class="btn btn-secondary">Slytherin</button>
    <button type="button" id="ravenclawBtn" class="btn btn-success">Ravenclaw</button>
    <button type="button" id="hufflepuffBtn" class="btn btn-danger">Hufflepuff</button>
    <button type="button" id="armyOfDarknessBtn" class="btn btn-warning">Army of Darkness</button>
    <button type="button" id="allBtn" class="btn btn-info">All</button>
  </div>
</form>`;
  openingPageDiv.style.display = 'none';
  renderToDom('#mainPage', domString);
  cardsOnDom(studentsArray)
  badCardsOnDom(voldemortArray)
}

const randNum = (num) => { // random number generator
  return Math.floor(Math.random() * num + 1); // .floor makes the numbers integers. .rsndom generates random numbers
}

// Creates new Student Card
const newStudent = (e) => {
  e.preventDefault();
  // Randomizer to choose House
  let student = {
    id: wizards.length + 1, // the id is the length of the array + 1
    name: document.querySelector('#name').value, // the name od student is what you put in input field. grabs value of the id
    house: randomHouse(),//calls function to generate a house 
  }
  if (document.querySelector('#name').value === "") { // if there is an empty string in input field, generate an alert
    alert("You must fill out the form")
  }
  else {
    wizards.push(student); // otherwise, push students to new array
    cardsOnDom(studentsArray) // call function to render the students in good card div so that you see your new student immediately
    badCardsOnDom(voldemortArray) // call function to render voldemoret array on bad cards div
  }
}

const randomHouse = () => {
  switch (randNum(4)) { // returning random numbers up to 4
    case 1:
      return 'Gryffindor' // if random number generator returns a 1, the name entered into input will become a gryffindor student
      break;
    case 2:
      return 'Ravenclaw'
      break;
    case 3:
      return 'Slytherin'
      break;
    case 4:
      return 'Huffle Puff'
      break;
  }
}
// Building new Student Object

mainPageDiv.addEventListener('click', event => { // looks in that specific div for the correct id. use query selectors
  if (event.target.id === "newStudent") { // when you click on lets wiz, the new student function called
    newStudent(event);
  };
});

openingPageDiv.addEventListener('click', event => {
  if (event.target.id === "welcomeBtn") {
    sortingForm();
  };
});

// *** Initial Page Loadout
const startApp = () => {
  // welcomeCard();
  startingPage();
}

startApp();


// *** Remember that whatever event listener is attached to is something that's existing in HTML 
// *** Cant add event listener without
// *** FUNCTIONS CAN ALWAYS LIVE OUTSIDE OF EVENT.LISTENER
// *** GOOD PRACTICE KEEPS IT CLEAN
// *** Learn event listener and callback function, check out youtube player project for link to youtube explanation
// *** REWATCH ARRAY METHODS VIDEO TO UNDERSTAND
// *** READ MORE ABOUT EVENT BUBBLING
