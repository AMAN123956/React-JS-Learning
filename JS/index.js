 
   let state = 0;
   
   const playBtn = document.getElementById("play-btn");
   const settingsBtn = document.getElementById("settings-btn");
   const land = document.getElementById("land");
   settingsBtn.addEventListener("click", function(){
     state = 1;
     localStorage.setItem("state",state);
     
     
  });

  
  playBtn.addEventListener("click", function() {
    let value = Number(localStorage.getItem("state"));
    if(value === 0){
       alert(" first set your Profile from setting in order to Proceed");
       land.setAttribute("href","#");
       
    }
    else {
      alert("Welcome!!! to the TechQuiz Hub|Powered by Junker's");
    }
  })
   
 