import "./styles.css"
import createHomePage from "./home"

const bodyContent = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const buttons = [homeBtn, menuBtn, contactBtn];
buttons.forEach(buttons => buttons.addEventListener("click", switchMainContent));

function switchMainContent(event) {
    const target = event.target.id;
    switch(target){
        case "home-btn":
            menuBtn.style.animation = "none";
            contactBtn.style.animation = "none";
            homeBtn.style.animation = "flicker 1.5s infinite alternate";
            bodyContent.textContent = "";
            bodyContent.appendChild(createHomePage());
        break;
        case "menu-btn":
            contactBtn.style.animation = "none";
            homeBtn.style.animation = "none";
            menuBtn.style.animation = "flicker 1.5s infinite alternate";
            bodyContent.textContent = "";
        break;
        case "contact-btn":
            menuBtn.style.animation = "none";
            homeBtn.style.animation = "none";
            contactBtn.style.animation = "flicker 1.5s infinite alternate";
            bodyContent.textContent = "";
        break;
    }
}

homeBtn.style.animation = "flicker 1.5s infinite alternate";
bodyContent.appendChild(createHomePage());