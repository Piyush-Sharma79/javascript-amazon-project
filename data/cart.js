import { getDeliveryOption } from "./deliveryOptions.js";
export let cart 

loadFromStorage();

export function loadFromStorage(){

  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart){
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity :1,
      deliveryOptionId:'1'
  },
  {
    productId :'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity :1,
    deliveryOptionId:'2'
  }];
  }

}


export function addToCart(productId, quantity) {
  let matchingItem;
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
        productId:productId,
        quantity:1,
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

    cart.forEach(cartItem => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
    
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

 export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;
  cart.forEach(cartItem => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
   if (!matchingItem) {
      return;
    }
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    if(!deliveryOption){
      return;
    }


  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
