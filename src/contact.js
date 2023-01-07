import map from '../dist/images/map.png'

function makeContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const mapMangalore = document.createElement("img");
    mapMangalore.classList.add('map');
    mapMangalore.src = map;
    mapMangalore.alt = `map of Mangalore`;
    
    contact.appendChild(makePara("WHERE WE ARE"));
    contact.appendChild(mapMangalore);
    contact.appendChild(makePara("HOURS:"));
    contact.appendChild(makePara("Mon to Fri: CLOSED"));
    contact.appendChild(makePara("Sunday: Noon to Midnight"));
    contact.appendChild(makePara("Saturday: Noon to Midnight"));

    return contact;
}

function makePara(text){
    const para = document.createElement("h2");
    para.textContent=(text);
    return para;
}
function loadContactPage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(makeContact());
}

export default loadContactPage;