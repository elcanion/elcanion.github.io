
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const about = document.getElementById("about");
const interestingCounter = document.getElementById("interestingCounter"); 
const mockhouse = document.getElementById("mockhouse"); 
const businessCard = document.getElementById("businessCard");
const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

document.getElementById("iframe").style.display = "none"
document.getElementById("projectHeader").style.display = "none"

function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = true;
}

function enableButton(buttonId) {
    document.getElementById(buttonId).disabled = false;
}

if (theme === "dark") {
    document.body.classList.add("dark");
}

if (theme === "dark") {
    document.getElementById("toggle").innerText = "\u263C";
} else {
    document.getElementById("toggle").innerText = "\u263E";
}  

function toggleTheme(event) {
    let text = event.textContent || event.innerText;
    if (text == "\u263E") {
        event.innerText = "\u263C";
    } else {
        event.innerText = "\u263E";
    }
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark");
    }
});

about.addEventListener("click", function() {
    document.getElementById("aboutDiv").style.display = "block"
    document.getElementById("iframe").style.display = "none"
    document.getElementById("projectHeader").style.display = "none"
    enableButton("mockhouse");
    enableButton("businessCard");
    enableButton("interestingCounter");
})

interestingCounter.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>ReactJS</li><li>Numbers API</li>";

    enableButton("mockhouse");
    enableButton("businessCard");
    document.getElementById("iframe").src = "https://interesting-counter.web.app/"
    disableButton("interestingCounter");
})

mockhouse.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    
    document.getElementById("headerList").innerHTML = "<li>NextJS</li><li>Contentful API</li><li>Firebase Auth</li>";


    enableButton("interestingCounter");
    enableButton("businessCard");
    document.getElementById("iframe").src = "https://mockhouse.vercel.app"
    disableButton("mockhouse");
})

businessCard.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>ReactJS</li><li>Contentful API</li>";

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