const panierFinalListe = document.getElementById("panier_final__liste");

    let cart = getCart();
    console.log(cart);

    for(let i=0;i<cart.length;i++){
        let newElt = document.createElement("li");
        newElt.textContent=cart[i];
        panierFinalListe.appendChild(newElt);
    }


    function getCart () {
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        console.log(cart); 
        return cart;
    }