function makeMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        makeMenuItem(
          "POMFRET",
          "Pomfret fish is known for its delicate, flaky white flesh and mild, sweet flavor. It is considered a delicacy in many parts of Asia and is often served as a whole fish with its head and tail intact. The fish can be cooked in a variety of ways, including steaming, grilling, frying, and baking."
        )
      );

    menu.appendChild(
      makeMenuItem(
        "GOLIBAJE",
        "Golibaje or Mangalore bajji is an Indian fried food made from various flours and curd. In Tulu Nadu region, it is known as golibaje. Other names for the dish include Mangalore baje. This is widely famous in Andhra Pradesh and Telangana as Mysore bonda/bajji.",
        "golibaje"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "KORIROTI",
        "Kori rotti is a spicy dish of Tulu Udupi-Mangalorean cuisine, a combination of red-chili and coconut milk based chicken curry and crisp, dry wafers made from boiled rice. Kori means chicken in Tulu.",
        "koriroti"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "GHEEROAST",
        "Chicken ghee roast is a popular Tuluva Mangalorean Chicken recipe whose origins go back to the town, Kundapur, close to Udupi. Chicken ghee roast is fiery red in colour, and has a tangy and spicy flavor with ghee and roasted spices.",
        "gheeroast"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "NEERDOSA",
        "Neer dosa, literally meaning water dosa in Tulu is a crêpe prepared from rice batter. Neer dosa is a delicacy from Tulu Nadu and part of Mangalorean cuisine",
        "neerdosa"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "PATHOLI",
        "Patholi (plural: Patoleo) are sweet stuffed rice rolls which are steamed wrapped in turmeric leaves. Since there’s a unique technique involved in this recipe, the preparation and cooking of this dish is laborious. It is vegan and since rice flour is the main ingredient, the dish is gluten free too.",
        "patholi"
      )
    );

    return menu;
}
function makeMenuItem(item, notes) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = item;
  
    const itemNotes = document.createElement("p");
    itemNotes.textContent = notes;
  
    const itemImage = document.createElement("img");
    itemImage.classList.add('menuImg');
    itemImage.src = `../dist/images/${item.toLowerCase()}.jpg`;
    itemImage.alt = `Image of ${item}`;
  
    menuItem.appendChild(foodName);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemNotes);
  
    return menuItem;
  }
function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(makeMenu());
}

export default loadMenuPage;