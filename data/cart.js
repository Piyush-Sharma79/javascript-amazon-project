export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity :2,
    deliveryOptionId:'1'
},
{
  productId :'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity :1,
  deliveryOptionId:'2'
}];
}



let matchingItem;

export function addToCart(productId, quantity) {
    cart.forEach(item => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += quantity;
    }
    else {
      cart.push({
        // productId : productId,
        // quantity :quantity
        productId,
        quantity, 
        deliveryOptionId:'1'
      });

      saveToStorage();
    }
  }

  function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
  }


  export function removeFromCart(productId) {
    const newCart = [];

    for(const cartItem of cart){
      () => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    }
    }

    cart = newCart;
    saveToStorage();
  }

  export function updateQuantity(productId, newQuantity){
    let matchingItem = [];
    cart.forEach(cartItem => {
      if(productId === cartItem.product){
        matchingItem = cartItem;
      }
    });

    matchingItem.quantity = newQuantity;
    saveToStorage();
  }

