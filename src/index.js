import "./scss/main.scss";
import "./about.html";
import Icon from "./assets/national-parks.jpg";
import $ from "jquery";

class Typo {
  constructor() {
    const logo = $("#logo");
    console.log(logo);
    this.show();
  }
  show() {
    const element = document.querySelector("#logo");
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
  }
}

const view = new Typo();
