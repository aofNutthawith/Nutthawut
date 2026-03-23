// Experience Counter
let startYear = 2020;
let currentYear = new Date().getFullYear();
let totalYears = currentYear - startYear;

let count = 0;
let counter = document.getElementById("exp-year");

let interval = setInterval(()=>{
count++;
counter.innerText = count;
if(count >= totalYears){
clearInterval(interval);
}
},100);

// Progress Animation
window.addEventListener("scroll",()=>{
document.querySelectorAll(".progress-fill").forEach(bar=>{
let position = bar.getBoundingClientRect().top;
if(position < window.innerHeight - 100){
bar.style.width = bar.dataset.width;
}
});
});