import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";
import helmet from '../dist/images/helmet.jpg';

function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurantName");
    restaurantName.textContent=("The MANGALOREAN");
   
    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header;
}

function createNav(){
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("buttons");
    homeButton.textContent=("HOME"); 
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHomePage();
      });

    const menuButton = document.createElement("button");
    menuButton.classList.add("buttons");
    menuButton.textContent=("MENU");
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenuPage();
      });

    const contactButton = document.createElement("button");
    contactButton.classList.add("buttons");
    contactButton.textContent=("CONTACT");
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContactPage();
      });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".buttons");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }
function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    main.classList.add("main");
    return main;
}

function createFooter(){
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerTextL = document.createElement('p');
  footerTextL.innerHTML = 'a mangy project';
  footer.appendChild(footerTextL);

  const footerImage = document.createElement('img');
  footerImage.src = helmet;
  footerImage.alt = 'Mangalorian Helmet';
  footerImage.classList.add('footerImage');
  footer.appendChild(footerImage);
  
  const footerTextR = document.createElement('p');
  footerTextR.innerHTML = 'NM Dec 2022';
  footer.appendChild(footerTextR);
  
  return footer;
}

function webInitialize(){

  const container = document.getElementById("content");

  container.appendChild (createHeader());
  container.appendChild (createMain());
  container.appendChild (createFooter());
  setActiveButton(document.querySelector(".buttons"));
  loadHomePage();
}
export default webInitialize;