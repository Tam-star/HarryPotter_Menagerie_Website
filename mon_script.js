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

const panierDiv = document.getElementById("panier__liste");
const panierButtons = document.getElementById("panier__boutons");
const panierButtonPay = document.getElementById("panier__boutons__pay");
const panierButtonClear = document.getElementById("panier__boutons__clear");

//OWLS
const arrayOwlsNames = ["BARN OWL", "BROWN OWL", "SCREECH OWL", "TAWNY OWL", "SNOWY OWL"];
const arrayOwlsPrices = ["10 Galleon", "10 Galleons", "15 Galleons", "10 Galleons", "30 Galleons"];
const arrayOwlsImagesPaths = ["images/owls/barn-owl.png", 
"images/owls/brown-owl.png", 
"images/owls/screech-owl.png", 
"images/owls/tawny-owl.png", 
"images/owls/snowy-owl.jpg"];

//CATS
const arrayCatsNames = ["BLACK CAT", "GINGER CAT", "SIAMESE CAT", "TABBY CAT", "WHITE CAT"];
const arrayCatsPrices = ["9 Galleons", "9 Galleons", "11 Galleons", "9 Galleons", "9 Galleons"];
const arrayCatsImagesPaths = ["images/cats/black-cat.png", 
"images/cats/ginger-cat.png", 
"images/cats/siamese-cat.png", 
"images/cats/tabby-cat.png", 
"images/cats/white-cat.png"];

//TOADS
const arrayToadsNames = ["COMMON TOAD", "CRESTED TOAD", "HARLEQUIN TOAD", "NATTERJACK TOAD", "WESTERN GREEN TOAD"];
const arrayToadsPrices = ["5 Galleons", "9 Galleons", "9 Galleons", "5 Galleons", "9 Galleons"];
const arrayToadsImagesPaths = ["images/toads/common-toad.png", 
"images/toads/crested-toad.png", 
"images/toads/harlequin-toad.png",
"images/toads/natterjack-toad.png", 
"images/toads/western-green-toad.png"];

let actualPage = "owls";
let cart = new Array();
if(sessionStorage.getItem("cart")){
    cart = JSON.parse(sessionStorage.getItem("cart"));
    panierDiv.textContent="";
    for(let i=0;i<cart.length;i++){
        let newElt = document.createElement("p");
        newElt.textContent=cart[i].nb+" "+cart[i].name;;
        panierDiv.appendChild(newElt);
        panierButtons.style.visibility="visible";
       
    }
    console.log("cart enregistré")
}
else    
    console.log("pas de cart enregistré")

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

    panierButtonClear.addEventListener("click", ()=> clearCart())
    panierButtonPay.addEventListener("click",() => goPay())



//FUNCTIONS 

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
   // for(let i=0;i<parseInt(quantite[item].textContent);i++)
        //cart.push(itemToAdd);
    cart.push({
            "nb": parseInt(quantite[item].textContent),
            "name": itemToAdd
        })
    
    if(cart.length==0){
        panierDiv.textContent="Your cart is empty";
        panierButtons.style.visibility="hidden";
    } else{
        panierDiv.textContent="";
        for(let i=0;i<cart.length;i++){
            let newElt = document.createElement("p");
            newElt.textContent=cart[i].nb+" "+cart[i].name;
            panierDiv.appendChild(newElt);
            panierButtons.style.visibility="visible";
        }
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }
    console.log(cart);
}

function clearCart(){
    for(let i=cart.length-1;i>=0;i--){
        cart.shift();
        sessionStorage.clear();
    }
    console.log(cart);   
    panierDiv.textContent="Your cart is empty";
    panierButtons.style.visibility="hidden";
}

//SESSION STORAGE FUNCTION
function goPay(){
  location.href = "order.html";
}
