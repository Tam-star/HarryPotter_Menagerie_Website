const boutonPlus = document.getElementsByClassName("pet_ajout__plus");
const boutonMoins = document.getElementsByClassName("pet_ajout__moins");
const quantite = document.getElementsByClassName("pet_ajout__quantite");
const addButton = document.getElementsByClassName("pet_ajout__add");

const owlsPageLink = document.getElementById("owls");
const catsPageLink = document.getElementById("cats");
const toadsPageLink = document.getElementById("toads");


const petName = document.getElementsByClassName("pet_description__species");
const petPrice = document.getElementsByClassName("pet_description__price");
const petImage = document.getElementsByClassName("grid_container__item__image__img");

const panierDiv = document.getElementById("panier");

//OWLS
const arrayOwlsNames = ["BARN OWL", "BROWN OWL", "SCREECH OWL", "TAWNY OWL", "SNOWY OWL"];
const arrayOwlsPrices = ["10 Galleon", "10 Galleons", "15 Galleons", "10 Galleons", "30 Galleons"];
const arrayOwlsImagesPaths = ["https://static.wikia.nocookie.net/pottermore/images/c/cf/Barn-owl-lrg.png/revision/latest?cb=20120602174448s", 
"https://static.wikia.nocookie.net/pottermore/images/3/3b/Brown-owl-lrg.png/revision/latest?cb=20120714045119", 
"https://static.wikia.nocookie.net/pottermore/images/c/c7/Screech-owl-lrg.png/revision/latest?cb=20120602175523", 
"https://static.wikia.nocookie.net/pottermore/images/7/79/Tawny-owl-lrg.png/revision/latest?cb=20120602175601", 
"images/owls/snowy-owl.jpg"];

//CATS
const arrayCatsNames = ["BLACK CAT", "GINGER CAT", "SIAMESE CAT", "TABBY CAT", "WHITE CAT"];
const arrayCatsPrices = ["9 Galleons", "9 Galleons", "11 Galleons", "9 Galleons", "9 Galleons"];
const arrayCatsImagesPaths = ["https://static.wikia.nocookie.net/pottermore/images/9/9a/Black-cat-lrg.png/revision/latest?cb=20120602173854", 
"https://static.wikia.nocookie.net/pottermore/images/9/9d/Ginger-cat-lrg.png/revision/latest?cb=20120602174049", 
"https://static.wikia.nocookie.net/pottermore/images/3/38/Siamese-cat-lrg.png/revision/latest?cb=20120602174132", 
"https://static.wikia.nocookie.net/pottermore/images/0/00/Tabby-cat-lrg.png/revision/latest?cb=20120602174209", 
"https://static.wikia.nocookie.net/pottermore/images/5/54/White-cat-lrg.png/revision/latest?cb=20120602174307"];

//TOADS
const arrayToadsNames = ["COMMON TOAD", "CRESTED TOAD", "HARLEQUIN TOAD", "NATTERJACK TOAD", "WESTERN GREEN TOAD"];
const arrayToadsPrices = ["5 Galleons", "9 Galleons", "9 Galleons", "5 Galleons", "9 Galleons"];
const arrayToadsImagesPaths = ["https://static.wikia.nocookie.net/pottermore/images/6/69/Common-toad-lrg.png/revision/latest?cb=20120714045724", 
"https://static.wikia.nocookie.net/pottermore/images/f/f0/Crested-toad-lrg.png/revision/latest?cb=20120714045918", 
"https://static.wikia.nocookie.net/pottermore/images/6/6b/Harlequin-toad-lrg.png/revision/latest?cb=20120714222017",
"https://static.wikia.nocookie.net/pottermore/images/3/3a/Natterjack-toad-lrg.png/revision/latest?cb=20120715023520", 
"https://static.wikia.nocookie.net/pottermore/images/8/8b/Western-green-toad-lrg.png/revision/latest?cb=20120715051431"];


let actualPage = "owls";
let cart = new Array();

for(let i=0;i<5;i++){
    petName[i].textContent=arrayOwlsNames[i];
    petPrice[i].textContent=arrayOwlsPrices[i];
    petImage[i].src = arrayOwlsImagesPaths[i];
}


owlsPageLink.addEventListener("click", function(){ 
  
    for(let i=0;i<5;i++){
        petName[i].textContent=arrayOwlsNames[i];
        petPrice[i].textContent=arrayOwlsPrices[i];
        petImage[i].src = arrayOwlsImagesPaths[i];
        quantite[i].textContent="0";
    }
    actualPage = "owls";
  });

catsPageLink.addEventListener("click", function(){ 
  
    for(let i=0;i<5;i++){
        petName[i].textContent=arrayCatsNames[i];
        petPrice[i].textContent=arrayCatsPrices[i];
        petImage[i].src = arrayCatsImagesPaths[i];
        quantite[i].textContent="0";
    } 
    actualPage = "cats";
  });

toadsPageLink.addEventListener("click", function(){ 
  
    for(let i=0;i<5;i++){
        petName[i].textContent=arrayToadsNames[i];
        petPrice[i].textContent=arrayToadsPrices[i];
        petImage[i].src = arrayToadsImagesPaths[i];
        quantite[i].textContent="0";
    } 
    actualPage = "toads";
  });
  

for(let i=0;i<5;i++){
    boutonPlus[i].addEventListener("click", ()=> add(i));
}

for(let i=0;i<5;i++){
    boutonMoins[i].addEventListener("click", ()=> substract(i));
}

for(let i=0;i<5;i++){
    addButton[i].addEventListener("click", ()=> addToCart(i));
}

function add(item){
    let intQuantite = parseInt(quantite[item].textContent);
    quantite[item].textContent=intQuantite+1;
}

function substract(item){
    let intQuantite = parseInt(quantite[item].textContent);
    if(intQuantite>0)
        quantite[item].textContent=intQuantite-1;
}

function addToCart(item){
    let itemToAdd ="";
    switch(actualPage){
        case "owls":
                itemToAdd=arrayOwlsNames[item];
            break;
        case "cats":
                itemToAdd=arrayCatsNames[item];
            break;
        case "toads":
                itemToAdd=arrayToadsNames[item];
            break;
    }
    for(let i=0;i<parseInt(quantite[item].textContent);i++)
        cart.push(itemToAdd);
    if(cart.length==0)
        panierDiv.textContent="Your cart is empty";
    else{
        panierDiv.textContent="";
        for(let i=0;i<cart.length;i++){
            let newElt = document.createElement("p");
            newElt.textContent=cart[i];
            panierDiv.appendChild(newElt);
           
        }
    }
    console.log(cart);
}