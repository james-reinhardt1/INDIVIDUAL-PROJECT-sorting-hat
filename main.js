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

// const studentsAssignedToSchool = [];
// const specialSkills = ["Disappears", "Blows Fire", "Summons Dragon"];

// // *** Functions    (divID) Whatever Div I'm targeting        (textToRender) Looking for string of HTML
// const renderToDom = (divId, htmlToRender) => {
//   const selectedElement = document.querySelector(divId);
//   selectedElement.innerHTML = htmlToRender;
// };

// // declaring as a variable. 
// const openingPageDiv = document.querySelector('#openingPage');
// const  mainPageDiv = document.querySelector('#mainPage');
// const schoolsDiv = document.querySelector ('#schools');
// const studentCardsDiv = document.querySelector('#studentCards');
// const goodCardsDiv = document.querySelector('#goodCards');
// const badCardsDiv = document.querySelector ('#badCards');
// const welcomeBtn = document.querySelector ('#welcomeBtn');


// const studentsNeedASchoolOnDom = (array) => {
//   let domString = "";

//   for (const wizards of array) {
//     domString += `
//     <div class="card" style="width: 12rem; margin: 5px;">
//     <div class="card-body">
//       <h5 class="card-title">${wizards.name.toUpperCase()}</h5>
//       <p class="card-text">Special Skill: ${wizards.house}</p>
//       <button class="btn btn-success" id="expell--${wizards.id}">EXPELL</button>
//     </div>
//   </div>`
//   }

//   renderToDom("#goodCards", domString);
// }

// const expelledStudentsOnDom = (array) => {
//   let domString = "";

//   for (const wizards of array) {
//     domString += `
//   <div class="card" style="width: 18rem;">
//     <h5 class="card-header">${wizards.name.toUpperCase()}</h5>
//     <p class="list-group-item pet-color card">${wizards.house}</p>
//     <button class="btn btn-success" id="expell--${wizards.id}">
//     Expell </button> 
//   </div> `;
//   };

//   renderToDom("#badCards", domString);
// };



// // const createId = (array) => {
// //   if (array.length) {
// //     const idArray = [];
// //     for (const el of array) {
// //       idArray.push(el.id);
// //     }
// //     return Math.max(...idArray) + 1;
// //   } else {
// //     return 0;
// //   }
// // }




// mainPage.addEventListener('click', (event) => {
//   if (event.target.id === "welcomeBtn") {
//     const welcomeButton = filter(students, 'welcomeBtn');
//     cardsOnDom("#welcomeBtn", welcomeButton);
//   }; 
// });

// //for filter buttons 
// // const mainPage = document.querySelector('#mainpg'); 

// // *** PRE-MADE CARDS/OBJECTS TO SHOW IN DIV BEFORE ENTERING IN NEW 
// // for (let i = 0; i < wizards.length; i++) {
// //   const = wizards[i];
// //   const bootStrapCardString = `
// //   <div class="card" style="width: 18rem;">
// //       <h5 class="card-header">${wizards.name}</h5>
// //     <div>
// //       <ul class="list-group list-group-flush">
// //      <li class="list-group-item">${wizards.house}</li>
// //     </div>
// //     <div>
// //       <button class="btn btn-success" id="delete--${wizards.id}">Expelled</button>
// //     </div>
// //   </div>`;
// //   rootDiv.innerHTML += bootStrapCardString;
// // };




// // *** WELCOME PAGE
// const startingPage = () => {
//   let domString = `
//   <div class="firstCard" style="width: 18rem;">
//     <img src="https://aux2.iconspalace.com/uploads/447401561.png" class="card-img-top" alt="Sorting Hat">
//     <div class="firstCard-body">
//       <h5 class="talkingSortingHat">Welcome! Lets make you a wizard!</h5>
//       <p class="card-text">Lets get wizarding!</p>
//       <a href="#" id="welcomeBtn" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`;
// renderToDom('#openingPage', domString);
// }

// // *** FORM TO ENTER IN STUDENT NAME ALONG WITH BUTTONS 
// const sortingForm = () => {
//   const domString =
//   `<form id= "nameEntry">
//   <div class="mb-3">
//     <label for="exampleInputName1" class="form-label">Enter name below</label>
//     <input type="text" class="form-control" id="enterName" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">And we'll find out what school is best for you!</div>
//   </div>
//   <button type="submit" class="btn btn-primary">Lets wiz!</button>
//   <div>
//     <button type="button" class="btn btn-primary">Gryffindor</button>
//     <button type="button" class="btn btn-secondary">Slytherin</button>
//     <button type="button" class="btn btn-success">Ravenclaw</button>
//     <button type="button" class="btn btn-danger">Hufflepuff</button>
//     <button type="button" class="btn btn-warning">Army of Darkness</button>
//     <button type="button" class="btn btn-info">All</button>
//   </div>
// </form>`;
// openingPageDiv.style.display = 'none';
// renderToDom('#mainPage', domString);
// }





//   const filter = (member, typeString) => {
//     const typeArray = []; //Filters terms with specific color <= this is referencing from Pet adoption lab
//     for (const member of array) {
//       if (member.house === typeString) {
//         typeArray.push(member);
//       }
//     }; //Goes through array and adds qualifying member to array
//     return typeArray;
//   };






// // *** Populates DOM with HTML when button on welcome card is pressed
// // const secondPage = () => {
// //   const domString =

// // }


// // // *** MAIN PAGE
// // const mainSite = => {
// //   let domString = `
// //   `
// // }

// // landingPage.style.display = 'none';
// // renderToDom('#', domString);

// // landingPage.addEventListener



// // // *** PUTS THE CARDS IN DIFFERENT DIVS
// // const cardsInDivs = (array) => {
// //   let cardString = '';
// //   for (const wizards of array) {
// //    cardString += `
// //    `
// //   }
// // }

// // welcomeDiv.addEventListener('click', e =>{
// //   if (e.target.id)
// // })



// const xFiles = (event) => {
// if (event.target.id === "welcomeBtn") {
// console.log('Hey there!');
// console.log(event.target);
// console.log(event.target.id);
// }};





// // *** Creates a new student card
// // page.addEventListener('submit', newStudent)
// // //  *** Filters for the House Buttons
// // page.addEventListener('click', houseFilter)

// openingPageDiv.addEventListener('click', event => {
//   if (event.target.id === "welcomeBtn") {
//     sortingForm();
//   };
// });

// // *** Initial Page Loadout
// const startApp = () => {
//   startingPage();
//   // sortingForm();
// }

// startApp();




// *** Remember that whatever event listener is attached to is something that's existing in HTML 
// *** Cant add event listener without
// *** FUNCTIONS CAN ALWAYS LIVE OUTSIDE OF EVENT.LISTENER
// *** GOOD PRACTICE KEEPS IT CLEAN
// *** Learn event listener and callback function, check out youtube player project for link to youtube explanation
// *** REWATCH ARRAY METHODS VIDEO TO UNDERSTAND
// *** READ MORE ABOUT EVENT BUBBLING




const openingPageDiv = document.querySelector('#openingPage');
const  mainPageDiv = document.querySelector('#mainPage');
const schoolsDiv = document.querySelector ('#schools');
const studentCardsDiv = document.querySelector('#studentCards');
const goodCardsDiv = document.querySelector('#goodCards');
const badCardsDiv = document.querySelector ('#badCards');
const welcomeBtn = document.querySelector ('#welcomeBtn');
const schoolButtons = document.querySelector ('#schoolButtons');




// *** Functions    (divID) Whatever Div I'm targeting        (textToRender) Looking for string of HTML
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


const filter = (array, typeString) => {
  const typeArray = []; //Filters terms with specific color

  for (const member of array) {
    if (member.house === typeString) {
      typeArray.push(member);
    }
  }; //Goes through array and adds qualifying member to array

  return typeArray;
};

const cardsOnDom = (array) => {
  let studentString = ""
  for (const member of array){
    studentString += `<h5>${member.name}</h5>`
  }
  renderToDom('#goodCards', studentString)
}

const badCardsOnDom = (array) => {
  let studentString = ""
  for (const member of array){
    studentString += `<h5>${member.name}</h5>`
  }
  renderToDom('#badCards', studentString)
}
let studentsArray = wizards

mainPageDiv.addEventListener('click', event => {
  if (event.target.id === "allBtn") {
    const studentsArray = wizards;
    cardsOnDom(studentsArray) 
  };
  if (event.target.id === "ravenclawBtn") {
    const studentsArray = filter(wizards, 'Ravenclaw');
    cardsOnDom(studentsArray) 
  }; 
  if (event.target.id === "gryffindorBtn") {
    const studentsArray = filter(wizards, 'Gryffindor');
    cardsOnDom(studentsArray) 
  }; 
  if (event.target.id === "hufflepuffBtn") {
    const studentsArray = filter(wizards, 'Huffle Puff');
    cardsOnDom(studentsArray)
  }; 
  if (event.target.id === "slytherinBtn") {
    const studentsArray = filter(wizards, 'Slytherin');
    cardsOnDom(studentsArray) 
  }; 

  if (event.target.id === "armyOfDarknessBtn") {
    const studentsArray = filter(wizards, 'Slytherin');
   let studetsArray = []
    cardsOnDom(studentsArray)
    badCardsOnDom(voldemortArray)  
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
      <a href="#" id="welcomeBtn" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
renderToDom('#openingPage', domString);
}

// *** FORM TO ENTER IN STUDENT NAME ALONG WITH BUTTONS 
const sortingForm = () => {
  let domString =
  `<form id= "nameEntry">
  <div class="mb-3">
    <label for="user" class="form-label">Enter name below</label>
    <input type="text" class="form-control" id="userName" aria-describedby="userHelp" required>
    <div id="userHelp" class="form-text">And we'll find out what school is best for you!</div>
  </div>
  <button type="submit" class="btn btn-primary" id="submit">Lets wiz!</button>
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


openingPageDiv.addEventListener('click', event => {
  if (event.target.id === "welcomeBtn") {
    sortingForm();
  };
});



const createWizard = (event) => { //condition 
  event.preventDefault(); // EVERY TIME YOU CREATE A FORM
  // 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate
  const newWizardObj = { //grabs the values
    id: wizards.length + 1,
    name: document.querySelector("#name").value,
    house: document.querySelector("#house").value,
    }
  
    console.log(newWizardObj);
    wizards.push(newWizardObj); //pushes the object
    cardsOnDom(wizards); //refreshes DOM with new pet
    form.reset(); //resets the form 
  }

  // form.addEventListener('submit', createWizard);






// *** Initial Page Loadout
const startApp = () => {
  // welcomeCard();
  startingPage();
  
}

startApp();
