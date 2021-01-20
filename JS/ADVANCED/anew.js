let value1=0;
let value2=0;
let value3=0;
let final=0;
value1 = (localStorage.getItem("astars1"));
value2 = (localStorage.getItem("astars2"))
value3 = (localStorage.getItem("astars3"));

final = Number(value1)+Number(value2)+Number(value3);
document.querySelector(".scoreboard").innerHTML=(final);
document.querySelector("#first").innerHTML= Number(value1)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#second").innerHTML= Number(value2)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#third").innerHTML= Number(value3)+ " 🌟 " + " out of" +" 15 🌟";
if(final>40){
    alert("Congratulations, You have Cracked the Game");
    alert("You are a real Genius!!!");
}
