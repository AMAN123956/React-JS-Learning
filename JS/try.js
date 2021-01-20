
const button = document.getElementById("submit_btn");

button.addEventListener("click", (e) =>{
    
    const age = document.getElementById("age");
    console.log(age.value);
    const username = document.getElementById("username");
  
   const avatar = document.getElementById("avatar");
   console.log(avatar.value);
   const profile = document.getElementById("profile-img");
   localStorage.setItem("name",username.value);
   localStorage.setItem("image",avatar.value);
  
})

const on = document.getElementById("on");
const off = document.getElementById("off");
on.addEventListener("click", (e) =>{
    alert("Thanks for Suscribing to Notifications");
    on.style.background="green";
    off.style.background="red";
})

off.addEventListener("click", (e) =>{
    alert("You will no longer be able to receive Notification from us");
    off.style.background="green";
    on.style.background="red";
})

const privacyBtn = document.getElementById("privacy-btn");
const thirdCollapse = document.getElementById("headingThree");
const privacy = document.getElementById("privacy");
const problemBtn = document.getElementById("problem-btn");
const problem = document.getElementById("problem");
const problemSubmitBtn = document.getElementById("problem-submit-btn");
thirdCollapse.addEventListener("click", (e) => {
    privacy.style.display="none";
    problem.style.display="none";
})



privacyBtn.addEventListener("click",(e) =>{
  privacy.style.display="block";
  problem.style.display="none";
})

/* Problem */

problemBtn.addEventListener("click", (e) => {
 problem.style.display="block";
 privacy.style.display="none";
})

problemSubmitBtn.addEventListener("click", (e) => {
    alert("Thanks for identifying our Mistake,we will ensure that next time it is not repeated");
})