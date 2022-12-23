

//get total cart
updateCartTotal();

// function showCart() {
//     var showAddCart = document.getElementById('cart-btn');

// }


//event listeners -- button
//document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addToCart');
for (var i = 0; i < btns.length; i++); {
    btns[i].addEventListener('click', function() {addCart(this)});
}


//   function(){  
//     $("#cart").on("click", function()){addedToCart(this)};
//   }
// //////

//function -- add to cart
function addCart(elem){
    //init

    var sibs = [];
    var getPrice;
    var getProductName;
    var cart = [];
    var stringCart;
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if(elem.className == "price"){
            getPrice = elem.innerText
        }
        if (elem.className == "name") {
            getProductName = elem.innerText;
        }
        sibs.push(elem);
    }

    //product object
    var product = {
        name : getProductName,
        price : getPrice

    };

    //convert to JSON storage
    var stringProduct = JSON.stringify(product);

    if(!sessionStorage.getItem('cart')){
        cart.push(stringProduct);
        stringCart = JSON.stringify(cart);
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getProductName);
        updateCartTotal();
    }

}

function updateCartTotal(){
    var price = 0;
    var name = "";

}



//user feedback --  success add
function addedToCart(pname){
    var message = pname + " was successfully added to the cart";
    var alerts = document.getElementById("alerts");
    alerts.innerHTML = message;
    if(!alerts.classList.contains("message"){
        alerts.classList.add("message");
    })
}