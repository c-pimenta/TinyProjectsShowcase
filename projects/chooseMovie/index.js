const instructionsInput = document.getElementById("instructions");
instructionsInput.addEventListener("click", () => {
  alert(
    "Tired of endless debates about what to watch?\n\nLet this tool decide for you!\n\n• Each player submits 3 movie choices\n• Hit the reveal button\n• A random movie is selected from all 6 options\n\nProblem solved — grab the popcorn! "
  );
});
const form1Input = document.getElementById("form1");
const submit1Input = document.getElementById("submit1");
const error1Outuput = document.getElementById("error1");
const info1Output = document.getElementById("info1");
const form2Input = document.getElementById("form2");
const submit2Input = document.getElementById("submit2");
const error2Outuput = document.getElementById("error2");
const info2Output = document.getElementById("info2");
const reveal = document.getElementById("reveal");
const movie = document.getElementById("Movie");
const icon = document.getElementById("icon");
const inputArray1 = [];
const inputArray2 = [];
reveal.style.visibility = "hidden";
icon.style.visibility = "hidden";

// function to apply to the 2 forms
function onFormSubmit(event, errorOutput, infoOutput, submitInput, inputArray) {
  event.preventDefault();
  let data = new FormData(event.target);
  let choice1 = data.get("choice1");
  let choice2 = data.get("choice2");
  let choice3 = data.get("choice3");
  if (choice1 === "" || choice2 === "" || choice3 === "") {
    errorOutput.textContent = "Please fill all the boxes with a movie title.";
  } else if (choice1 === choice2 || choice1 == choice3 || choice2 === choice3) {
    errorOutput.textContent = "Please write different movies tittles";
  } else {
    errorOutput.textContent = "";
    event.target.reset();
    inputArray.push(choice1, choice2, choice3);
    console.log(inputArray);
    infoOutput.textContent =
      "Your choosen movies are: " + inputArray.join(" , ") + ".";
    submitInput.disabled = true;
  }
}

//1st form
form1Input.addEventListener("submit", (event) => {
  onFormSubmit(event, error1Outuput, info1Output, submit1Input, inputArray1);
});
//2nd form
form2Input.addEventListener("submit", (event) => {
  onFormSubmit(event, error2Outuput, info2Output, submit2Input, inputArray2);
  reveal.style.visibility = "visible";
});

// to randomize
function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//revealing
reveal.addEventListener("click", () => {
  let movies = inputArray1.concat(inputArray2);
  console.log(movies);
  fisherYatesShuffle(movies);
  let result = movies[0];
  console.log(result);
  movie.textContent = "Today's movie is : " + result;
  icon.style.visibility = "visible";
  reveal.disabled = true;
});
