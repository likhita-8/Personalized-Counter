//document.getElementById("count-el").innerText = 5;


let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    console.log("The button was clicked");
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.innerText = 0;
    count = 0;

}