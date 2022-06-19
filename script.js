
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var randomNumber;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const about = document.getElementById("about");
const interestingCounter = document.getElementById("interestingCounter");
const notepad = document.getElementById("notepad");
const toDo = document.getElementById("toDo"); 
const mockhouse = document.getElementById("mockhouse"); 
const mockhouseCrm = document.getElementById("mockhouseCrm"); 
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
    enableButton("toDo");
    enableButton("mockhouse");
    enableButton("mockhouseCrm");
    enableButton("businessCard");
    enableButton("interestingCounter");
})

notepad.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>ReactJS</li><li>Typescript</li><li>styled-components</li>";
    document.getElementById("repoURL").href = "https://github.com/elcanion/notes-typescript/"
    document.getElementById("repoURL").target = "_blank"
    document.getElementById("repoURL").rel = "noopener noreferrer"
    document.getElementById("repoURL").textContent = "Notes in Github"

    enableButton("toDo");
    enableButton("interestingCounter");
    enableButton("mockhouse");
    enableButton("businessCard");
    enableButton("mockhouseCrm");
    document.getElementById("iframe").src = "https://notepad-typescript.web.app/"
    disableButton("notepad");
})

toDo.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>ReactJS</li><li>Typescript</li><li>styled-components</li><li>Firebase Firestore</li>";
    document.getElementById("repoURL").href = "https://github.com/elcanion/todo-list-typescript/"
    document.getElementById("repoURL").target = "_blank"
    document.getElementById("repoURL").rel = "noopener noreferrer"
    document.getElementById("repoURL").textContent = "To-do List in Github"

    enableButton("notepad");
    enableButton("interestingCounter");
    enableButton("mockhouse");
    enableButton("businessCard");
    enableButton("mockhouseCrm");
    document.getElementById("iframe").src = "https://todo-list-typescript.web.app/"
    disableButton("toDo");
})

interestingCounter.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>ReactJS</li><li>Numbers API</li>";
    document.getElementById("repoURL").href = "https://github.com/elcanion/interesting-counter/"
    document.getElementById("repoURL").target = "_blank"
    document.getElementById("repoURL").rel = "noopener noreferrer"
    document.getElementById("repoURL").textContent = "Interesting Counter in Github"

    enableButton("notepad");
    enableButton("toDo");
    enableButton("mockhouse");
    enableButton("businessCard");
    enableButton("mockhouseCrm");
    document.getElementById("iframe").src = "https://interesting-counter.web.app/"
    disableButton("interestingCounter");
})

mockhouse.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>NextJS</li><li>Contentful API</li><li>Firebase Auth</li>";
    document.getElementById("repoURL").href = "https://github.com/elcanion/mockhouse/"
    document.getElementById("repoURL").target = "_blank"
    document.getElementById("repoURL").rel = "noopener noreferrer"
    document.getElementById("repoURL").textContent = "Mockhouse in Github"

    enableButton("notepad");
    enableButton("toDo");
    enableButton("interestingCounter");
    enableButton("businessCard");
    enableButton("mockhouseCrm");
    document.getElementById("iframe").src = "https://mockhouse.vercel.app"
    disableButton("mockhouse");
})

mockhouseCrm.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>Dart</li><li>Flutter</li><li>Firebase Firestore</li><li>Firebase Auth</li>";
    document.getElementById("repoURL").href = "https://github.com/elcanion/mockhouse-crm/"
    document.getElementById("repoURL").target = "_blank"
    document.getElementById("repoURL").rel = "noopener noreferrer"
    document.getElementById("repoURL").textContent = "Mockhouse CRM in Github"

    enableButton("notepad");
    enableButton("toDo");
    enableButton("mockhouse");
    enableButton("businessCard");
    enableButton("interestingCounter");
    document.getElementById("iframe").src = "https://mockhouse-crm.web.app/"
    disableButton("mockhouseCrm");
})

businessCard.addEventListener("click", function() {
    document.getElementById("projectHeader").style.display = "block"
    document.getElementById("iframe").style.display = "inline"
    document.getElementById("aboutDiv").style.display = "none"

    document.getElementById("headerList").innerHTML = "<li>ReactJS</li><li>Contentful API</li>";
    document.getElementById("repoURL").href = "https://github.com/elcanion/react-business-card/"
    document.getElementById("repoURL").target = "_blank"
    document.getElementById("repoURL").rel = "noopener noreferrer"
    document.getElementById("repoURL").textContent = "React Business Card in Github"

    enableButton("notepad");
    enableButton("toDo");
    enableButton("mockhouse");
    enableButton("mockhouseCrm");
    enableButton("interestingCounter");
    document.getElementById("iframe").src = "https://react-business-card-79db2.web.app/"
    disableButton("businessCard");
})

btn.addEventListener("click", function() {
    let hexColor = '#';
    var rndNumber;
    for (let i = 0; i < 6; i++){
        rndNumber = Math.floor(Math.random() * 16);
        hexColor += hex[rndNumber];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.textContent = "click again"
})