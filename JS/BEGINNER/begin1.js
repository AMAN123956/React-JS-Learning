
let score = 0;
let stars = 0;
var numberOfButton = 4;
let selectedOption = ["o", "o", "o", "o", "o"];
let correctAnswer = ["b", "c", "a", "a", "a"];
let level = document.getElementById("levels").innerHTML;
const firstbutton = document.querySelectorAll(".firstbutton");
const secondbutton = document.querySelectorAll(".secondbutton");
const thirdbutton = document.querySelectorAll(".thirdbutton");
const fourthbutton = document.querySelectorAll(".fourthbutton");
const fifthbutton = document.querySelectorAll(".fifthbutton");
for (let i = 0; i < numberOfButton; i++) {

  document.querySelectorAll(".firstbutton")[i].addEventListener("click", function () {
    for (let j = 0; j < 4; j++){
      firstbutton[j].style.background = "white";
    }
      firstbutton[i].style.background = "yellow";
      var buttonInnerHTML = this.innerHTML;
      console.log(buttonInnerHTML);
        if(buttonInnerHTML === "b"){
           selectedOption[0] = this.innerHTML;
        }
        else{
           selectedOption[0] = this.innerHTML;
        }
        
    });


    document.querySelectorAll(".secondbutton")[i].addEventListener("click", function() {
      for (let j = 0; j < 4; j++){
        secondbutton[j].style.background = "white";
      }
       secondbutton[i].style.background = "yellow";
       
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "c"){
             selectedOption[1] = this.innerHTML;
          }
          else{
            selectedOption[1] = this.innerHTML;
          }
                    
      });

      document.querySelectorAll(".thirdbutton")[i].addEventListener("click", function() {
        for (let j = 0; j < 4; j++){
          thirdbutton[j].style.background = "white";
        }
          thirdbutton[i].style.background = "yellow";
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
             selectedOption[2] = this.innerHTML;
          }
          else{
            selectedOption[2] = this.innerHTML;
          }
        });
  document.querySelectorAll(".fourthbutton")[i].addEventListener("click", function () {
    for (let j = 0; j < 4; j++){
      fourthbutton[j].style.background = "white";
    }
      fourthbutton[i].style.background = "yellow";
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
              selectedOption[3] = this.innerHTML;
          }
          else{
              selectedOption[3] = this.innerHTML;
          }
         
      });
      document.querySelectorAll(".fifthbutton")[i].addEventListener("click", function() {
        for (let j = 0; j < 4; j++){
          fifthbutton[j].style.background = "white";
        }
          fifthbutton[i].style.background = "yellow";
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
          if(buttonInnerHTML === "a"){
             selectedOption[4] = this.innerHTML;
          }
          else{
            selectedOption[4] = this.innerHTML;
          }
       });
  
    
}
// end of outer loop


/* Score and Stars Calculation Section */
let state = 0;
// State to check whether user has attempted any question or not

let stars1 = 0;
let stars2 = 0;
let stars3 = 0;
let stars4 = 0;
let stars5 = 0;
let stars6 = 0;
document.querySelector(".resultButton").addEventListener("click", function() {
  state=1;
  for (let i = 0; i < 5; i++){
    if (selectedOption[i] == correctAnswer[i]) {
      score += 1;
      stars += 3;
    }
  }  
  alert("Your Score is " + score + " You have earned 🌟🌟 " + stars)
  document.querySelector(".inter").innerHTML = " Your Score is " + score + " You have earned 🌟🌟 " + stars ;
  document.querySelector(".inter").style.color="white";
 
console.log(level);

  if(level === "one"){
    stars1 = stars;
    console.log("stars1" + stars1);
    localStorage.setItem("stars1",stars1);
  }
  else if(level === "two"){
    stars2 = stars;
    localStorage.setItem("stars2",stars2);
  }
  else if(level === "three"){
    stars3 = stars;
    localStorage.setItem("stars3", stars3);
  }
  else if(level === "four"){
     stars4= stars;
    localStorage.setItem("stars4",stars4);
  }
  else if(level === "five"){
   stars5 = stars;
   console.log(stars5);
   localStorage.setItem("stars5",stars5);    
  }
  else{
    stars6 = stars;
    console.log(stars6);
    localStorage.setItem("stars6",stars6);
  }
  
});
document.querySelector(".mainButton").addEventListener("click", function() {
  if(state===1){
    if(level!== "one") {
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score} and you have earned 🌟🌟 ${stars} <br>
      Correct Answers Are:<br>
      1-(b) <br>
      2-(c) <br>
      3-(a) <br>
      4-(a) <br>
      5-(a) 
      `;
      document.querySelector(".inter").style.color="white";
    }
    else {
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score} and you have earned 🌟🌟 ${stars} <br>
      Correct Answers Are:<br>
      1-(b) <br>
      2-(a) <br>
      3-(c) <br>
      4-(a) <br>
      5-(a) 
      `;
      document.querySelector(".inter").style.color="white";
     
    }
  }

  else{
    alert("Cheating is a bad habit,First attempt questions!!");
  }
});

