const owlsPageLink = document.getElementById("owls");
const catsPageLink = document.getElementById("cats");
const toadsPageLink = document.getElementById("toads");


const petName = document.getElementsByClassName("pet_description__species");
const petPrice = document.getElementsByClassName("pet_description__price");
const petImage = document.getElementsByClassName("grid_container__item__image__img");


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
    }
  });

catsPageLink.addEventListener("click", function(){ 
  
    for(let i=0;i<5;i++){
        petName[i].textContent=arrayCatsNames[i];
        petPrice[i].textContent=arrayCatsPrices[i];
        petImage[i].src = arrayCatsImagesPaths[i];
    } 
  });

toadsPageLink.addEventListener("click", function(){ 
  
    for(let i=0;i<5;i++){
        petName[i].textContent=arrayToadsNames[i];
        petPrice[i].textContent=arrayToadsPrices[i];
        petImage[i].src = arrayToadsImagesPaths[i];
    } 
  });
  