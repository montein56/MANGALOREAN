function makeHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    home.appendChild(makePara("Mangalorean food is an eclectic mix of cuisines from different communities who have long inhabited the coasts of Karnataka."));
    home.appendChild(makePara("Mangalorean cuisine has also been influenced by the food of South India which is why you will find an abundance of curry leaves and coconut. But it is foolhardy to dismiss Mangalorean food as simply South Indian because of its unique dishes."));
    home.appendChild(makePara("Because nowhere else in the world, will you find the delicious ghee roast, kori roti, or leaf-wrapped patolis."))

    return home;
}

function makePara(text){
    const para = document.createElement("p");
    para.textContent=(text);
    return para;
}

function loadHomePage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(makeHome());
}
export default loadHomePage;