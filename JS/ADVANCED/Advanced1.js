let answer = ["b", "c", "d", "a", "a", "a"];
let score1 = 0;
let stars1 = 0;
let selectedOption = ["o", "o", "o", "o", "o"];
let correctAnswer = ["d", "d", "a", "c", "b"];
let level = document.getElementById("levels").innerHTML;
var numberOfButton = 4;
const firstbutton = document.querySelectorAll(".firstbutton");
const secondbutton = document.querySelectorAll(".secondbutton");
const thirdbutton = document.querySelectorAll(".thirdbutton");
const fourthbutton = document.querySelectorAll(".fourthbutton");
const fifthbutton = document.querySelectorAll(".fifthbutton");
for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".firstbutton")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      console.log(buttonInnerHTML);
      for (let j = 0; j < 4; j++){
        firstbutton[j].style.background = "white";
      }
        firstbutton[i].style.background = "yellow";
          if(buttonInnerHTML === "d"){
             selectedOption[0] = this.innerHTML;
          }
          else{
             selectedOption[0] = this.innerHTML;
          }
       
    });


    document.querySelectorAll(".secondbutton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        for (let j = 0; j < 4; j++){
          secondbutton[j].style.background = "white";
        }
         secondbutton[i].style.background = "yellow";
         if(buttonInnerHTML === "d"){
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
      document.querySelectorAll(".fourthbutton")[i].addEventListener("click", function() {
        for (let j = 0; j < 4; j++){
          fourthbutton[j].style.background = "white";
        }
          fourthbutton[i].style.background = "yellow";
            var buttonInnerHTML = this.innerHTML;
            console.log(buttonInnerHTML);
              if(buttonInnerHTML === "c"){
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

      
let state;
let astars1=0;
let astars2=0;
let astars3=0;
document.querySelector(".resultButton").addEventListener("click", function() {
  state=1;
  for (let i = 0; i < 5; i++){
    if (selectedOption[i] == correctAnswer[i]) {
      score1 += 1;
      stars1 += 3;
    }
  }  
  alert("Your Score is: " + score1 + " and you have earned " + stars1 +" 🌟🌟");
  document.querySelector(".inter").innerHTML = " Your Score is " + score1 + " You have earned 🌟🌟 " + stars1 ;
  document.querySelector(".inter").style.color="white";

 
   if(level === "one")
   {
       astars1 = stars1;
       localStorage.setItem("astars1",astars1);
   }
   else if(level === "two"){
       astars2 = stars1;
       localStorage.setItem("astars2",astars2);
   }
   else {
        astars3 = stars1;
        localStorage.setItem("astars3",astars3);
   }
});
document.querySelector(".mainButton").addEventListener("click", function() {
  if(state===1){
      document.querySelector(".inter").
      innerHTML = ` Your Score is ${score1} and you have earned 🌟🌟 ${stars1} <br>
      Correct Answers Are:<br>
      1-(d) <br>
      2-(d) <br>
      3-(a) <br>
      4-(c) <br>
      5-(b) 
      `;
      document.querySelector(".inter").style.color="white";
    }
    
  else{
    alert("Cheating is a bad habit,First attempt questions!!");
  }
});
