const panierFinalListe = document.getElementById("panier_final__liste");
const goingBack = document.getElementById("going_back");


    let cart = getCart();
    console.log(cart);

    for(let i=0;i<cart.length;i++){
        let newElt = document.createElement("li");
        newElt.textContent=cart[i].nb+" "+cart[i].name;
        panierFinalListe.appendChild(newElt);
    }

    goingBack.addEventListener("click", ()=> {
        location.href = "index.html";
        sessionStorage.setItem("cart", JSON.stringify(cart));
    })


    function getCart () {
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        console.log(cart); 
        return cart;
    }

    