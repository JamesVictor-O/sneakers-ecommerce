const mainProduct=document.querySelector(".products")
let numberofCart=document.querySelector(".noti");
const cart=document.querySelector(".cart")
let cartItem=document.querySelector(".cart-items");

let numberOfItemOnChart=0;
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
              <p>${products[i].name}</p>
              <span>${products[i].price}</span>
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

function AddItemToCart(){{}
    addCart.forEach(addCart =>{
        addCart.addEventListener("click", (e)=>{
            numberOfItemOnChart += 1
            numberofCart.innerHTML=numberOfItemOnChart;
           let Target=e.target;
            parent = Target.parentElement;
            console.log(parent)
            let itemName = parent.querySelector("p").innerHTML;
            itemPrice=parent.querySelector("span").innerHTML
            itemImage=parent.querySelector("img").src
          
                
            let itemdetails = `<div class="itemsOnCart">
                <div>
                <img src="${itemImage}" >
                <h2>${itemName}</h2> 
                </div>
                <div>
                    <input type="number" value=1 class="quantity" min="1">
                </div>
                <div class="price">
                    <h2 class="priceValue">${itemPrice}</h2>
                    <div class="totalPrice">
                        <h2 class=""totalValue></h2>
                    </div>
                </div>
            </div>
            `
            cartItem.innerHTML += itemdetails;

            // let itemQuantity = document.querySelectorAll(".quantity")
            // function ItemTotalPrice() {
            //     for (let i = 0; i < itemQuantity.length; i++){
            //         console.log(itemQuantity[i])
            //     }
            // }
            // ItemTotalPrice()
            let itemQuantity = document.querySelectorAll(".itemsOnCart")
            function ItemTotalPrice() {
                for (let i = 0; i < itemQuantity.length; i++){
                    let amount = itemQuantity[i].querySelectorAll(".quantity")
                    for (let i = 0; i < amount.length; i++) {
                        amount[i].addEventListener("onChange", () => {
                            alert("re")
                        })
                    }
                    console.log(amount)
                }
            }
            ItemTotalPrice()
            console.log(itemQuantity)


        })
       })
}
AddItemToCart()
// let sneakersData = function(){
//     fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-04-24&sortBy=publishedAt&apiKey=623632dd405a4b0e984728cc40574cb7").then(function (respons) {
//         return respons.json();
//     }).then(function (data) {
//         console.log(data)
//     });
// }
// sneakersData()