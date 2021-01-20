const name = document.getElementById("name");
name.innerHTML = localStorage.getItem("name");
const profile = document.getElementById("profile-img");
profile.setAttribute("src",localStorage.getItem("image"));