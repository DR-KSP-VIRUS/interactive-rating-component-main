'use strict';

const submitBtn = document.getElementById("submit");
const overlay = document.getElementById("overlay");
const resultModal = document.getElementById("result-modal");
const closeBtn = document.getElementById("close-btn");

const ratingValues = document.querySelectorAll("input");
const score = document.getElementById("score");

let result = "";
ratingValues.forEach(element => {
    element.addEventListener("click",() =>{
        let value = element.value;
        console.log(value);
        result = value;
    });
});

submitBtn.addEventListener("click", () => {
    if(result){
        overlay.classList.add('overlay');
        resultModal.style.display = "flex";
        score.innerText = result;
    }

});

closeBtn.addEventListener("click",() => {
    overlay.classList.remove('overlay');
    resultModal.style.display = "none";
})
