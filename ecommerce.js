const mainProduct=document.querySelector(".products")
let numberofCart=document.querySelector(".noti");
const cart=document.querySelector(".cart")
cartItem=document.querySelector(".cart-items");

let cartNum=0;
let addCart;
let parent;

const products=[
    {
        name:"nike shoe",
        picture:"assets/add1.jpeg",
        price:"200"
    },
    {
        name:"nike shoe",
        picture:"assets/add2.png",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/add4.jpg",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/Add7.jpg",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe1.png",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe3.jpeg",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe4.jpeg",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe5.jpeg",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe7.jpeg",
        price:"$200"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe8.jpeg",
        price:"$200"
    },
]
let product="";

function Products(){
    for(let i=0;i<products.length; i++){
          product +=`<div class="pro-items">
          <img src=${products[i].picture}>
          <div class="about">
              <p>${products[i].name}  <span>${products[i].price}</span></p>
          </div>
          <button class="addCart">Add to cart</button>
          </div>`
         mainProduct.innerHTML=product
        addCart=document.querySelectorAll(".addCart")
       
    }

}
Products()

// display cart item when you click on the cart button
function DisplayCart(){
    cart.addEventListener("click",()=>{
        if(cartItem.style.display === "none"){
            cartItem.style.display="block"
        }else{
            cartItem.style.display="none"
        }
    })
}
DisplayCart()

// adding functionality to the addCart button on the item

function AddCart(){
    addCart.forEach(addCart =>{
        addCart.addEventListener("click", (e)=>{
            cartNum += 1
            numberofCart.innerHTML=cartNum;
           let Target=e.target;
           parent=Target.parentElement;
           cartItem.innerHTML=parent;
           console.log(parent)
        })
       })
}
AddCart()