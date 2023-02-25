const trusted = document.getElementById("bubble");
const bubble = trusted.querySelectorAll("div");
const psikolog = document.getElementById("psikolog");
const profilePsikolog = document.querySelectorAll(".profile-psikolog");

for (let i = 0; i < bubble.length; i++) bubble[i].style.backgroundImage = `url("./../assets/images/trusted-bubble-${i+1}.jpg")`;
for (let i = 0; i < profilePsikolog.length; i++) profilePsikolog[i].style.backgroundImage = `url("./../assets/images/psikolog-profile-${i+1}.jpg")`;