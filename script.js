const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
console.log(document.getElementById("iframe").src)
document.getElementById("iframe").style.display = "none"

function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = true;
}

function enableButton(buttonId) {
    document.getElementById(buttonId).disabled = false;
}

about.addEventListener("click", function() {
    disableButton("about");
    document.getElementById("aboutDiv").style.display = "block"
    document.getElementById("iframe").style.display = "none"
    enableButton("mockhouse");
    enableButton("businessCard");
    enableButton("interestingCounter");
})

interestingCounter.addEventListener("click", function() {
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"
    enableButton("mockhouse");
    enableButton("businessCard");
    document.getElementById("iframe").src = "https://interesting-counter.web.app/"
    disableButton("interestingCounter");
})

mockhouse.addEventListener("click", function() {
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"
    enableButton("interestingCounter");
    enableButton("businessCard");
    document.getElementById("iframe").src = "https://mockhouse.vercel.app"
    disableButton("mockhouse");
})

businessCard.addEventListener("click", function() {
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"
    enableButton("mockhouse");
    enableButton("interestingCounter");
    document.getElementById("iframe").src = "https://react-business-card-79db2.web.app/"
    disableButton("businessCard");
})

btn.addEventListener("click", function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        randomNumber = Math.floor(Math.random() * 16);
        hexColor += hex[randomNumber];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.textContent = "click again"
})