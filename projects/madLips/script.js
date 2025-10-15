const start = document.getElementById("start");
const container = document.getElementById("container");
const titleContainer = document.getElementById("titleContainer");
const finalStory = document.getElementById("finalStory");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const inputs = [];
const story = [
  `<p>It was a <input type="text" placeholder="Adjective" name="userInput"> day when <input type="text" placeholder="Name" name="userInput"> and <input type="text" placeholder="Name" name="userInput"> decided to embark on an adventure. 
  Equipped with a <input type="text" placeholder="Object" name="userInput">, they set off into the <input type="text" placeholder="Location" name="userInput">, 
  unaware that something <input type="text" placeholder="Adjective" name="userInput"> was about to change their life forever.</p>`,

  `<p>As <input type="text" placeholder="Name" name="userInput"> strolled through the <input type="text" placeholder="Location" name="userInput">, 
  a loud <input type="text" placeholder="Sound" name="userInput"> echoed behind them. Spinning around, they gasped—standing there was a 
  <input type="text" placeholder="Adjective" name="userInput"> <input type="text" placeholder="Animal" name="userInput">, 
  wearing a <input type="text" placeholder="Clothing Item" name="userInput"> and holding a <input type="text" placeholder="Object" name="userInput">. 
  `,` "You must <input type="text" placeholder="Verb" name="userInput"> with me, or face the wrath of the 
  <input type="text" placeholder="Adjective" name="userInput"> <input type="text" placeholder="Mythical Creature" name="userInput">!" it declared.</p>`,
];
let counter = 0;
let newtitle = "";


function addTitle() {
  const newContainer = document.createElement("div");
  newContainer.innerHTML = `<h3>The Mysterious Adventure of <input style="font-size: 20px;" type="text" placeholder="Name" id="input"></h3>`;
  container.appendChild(newContainer);
  start.style.display = "none";
  container.style.backgroundColor = "#353935";
  container.style.border = "2px solid #fff";
  btn.hidden = false;
  addParagraph();
}

function resetContainer() {
  container.innerHTML = "";
}
function eliminateContainer() {
  container.style.display = "none";
  titleContainer.style.display = "none";

}

  function getInputs() {
  const inputElements = document.getElementsByName("userInput"); 
  inputElements.forEach((input) => {
    inputs.push(input.value);
  });

  console.log(inputs);
}

function addParagraph() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(counter==0){
  let title= document.createElement("h3")
  titleContainer.appendChild(title);
   newtitle = document.getElementById("input").value;
  title.innerText = `The Mysterious Adventure of ${newtitle}`;
  container.innerHTML = "";
    let p = document.createElement("div");
     p.innerHTML = story[counter];
      container.appendChild(p);
      counter++;
    
 
    } else if(counter<story.length){
      getInputs();
      resetContainer();
      let p = document.createElement("div");
       p.innerHTML = story[counter];
       container.appendChild(p);
        counter++;
    } else {
      getInputs();
      eliminateContainer();
      btn.hidden = true;
      let finalP = document.createElement("div");
      finalP.innerHTML = `<h2>The Mysterious Adventure of ${newtitle}</h2>
      <p>It was a ${inputs[0]} day when ${inputs[1]} and ${inputs[2]} decided to embark on an adventure.
 Equipped with a ${inputs[3]}, they set off into the ${inputs[4]},unaware that something ${inputs[5]} was about to change their life forever.</p> <p>As ${inputs[6]} strolled through the ${inputs[7]},
 a loud ${inputs[8]} echoed behind them. Spinning around, they gasped—standing there was a ${inputs[9]} ${inputs[10]},wearing a ${inputs[11]} and holding a ${inputs[12]}. "You must ${inputs[13]} with me, or face the wrath of the
 ${inputs[14]} ${inputs[15]}!" it declared.</p>`;
  finalStory.appendChild(finalP);
    }








  
  //   resetContainer();

    
  //    let p = document.createElement("div");
  //     p.innerHTML = story[counter];
  //     container.appendChild(p);
  //    let inputs= document.querySelectorAll(".userInput").values;
  //    console.log(inputs)
  //     counter++;
    

  });
}
start.addEventListener("click", addTitle);
