import "./styles.css"
import createHomePage from "./home"

const bodyContent = document.querySelector("#content");
bodyContent.appendChild(createHomePage());