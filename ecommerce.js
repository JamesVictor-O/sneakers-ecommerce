const mainProduct=document.querySelector(".products")
let numberofCart = document.querySelector(".noti");
const homepage = document.querySelector(".homePage")
const collection=document.querySelector(".collection")
const cart=document.querySelector(".cart")
let cartItem = document.querySelector(".cart-items");
const itemContainer = document.querySelector(".cartitem")
const numberOfitem = document.querySelector(".no")
const navBarCollection = document.querySelector(".btnCollection");
const nike = document.querySelector(".nike")
const adidas=document.querySelector(".adidas")

let numberOfItemOnChart=0;
let addCart;
let parent;

const products=[
    {
        name:"nike shoe",
        picture:"assets/add1.jpeg",
        price:"$200"
    },
    {
        name:"adidas 3",
        picture:"assets/add2.png",
        price:"$200"
    },
    {
        name:"adidas 3",
        picture:"assets/add4.jpg",
        price:"$200"
    },
    {
        name:"adidas airforec 2",
        picture:"assets/Add7.jpg",
        price:"$200"
    },
    {
        name:"adidas sheo",
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
// display products base on brand
function DisplayBrandItems(brand) {
    let filteredItem = products.filter(items => {
        return items.name.includes(brand)
    })
    product=""
    for(let i=0;i<filteredItem.length; i++){
        product +=`<div class="pro-items">
        <img src=${filteredItem[i].picture}>
        <div class="about">
            <p>${filteredItem[i].name}</p>
            <span>${filteredItem[i].price}</span>
        </div>
        <button class="addCart">Add to cart</button>
        </div>`  
        
        mainProduct.innerHTML = product;
        addCart = document.querySelectorAll(".addCart")
        console.log(addCart)
    
    }  
}

adidas.addEventListener("click", () => { 
        
        DisplayBrandItems("adidas")
})
    
nike.addEventListener("click", () => { 
        
    DisplayBrandItems("nike")
})
    
// display cart item when you click on the cart button
function DisplayCart(){
    cart.addEventListener("click",()=>{
        if(cartItem.style.display === "none"){
            cartItem.style.display = "block",
                homepage.style.display = "none";
            collection.style.display="none"
            
        }else{
            cartItem.style.display = "none"
            homepage.style.display = "flex";
            collection.style.display="grid"
        }
    })
}
DisplayCart()    
    

function DisplayProducts(navbar,cart,home,collect) {
    navbar.addEventListener("click", () => {
        if (collect.style.display === "none") {
            cart.style.display = "none",
                home.style.display = "none";
            collect.style.display = "grid"
            
        } else {
            cart.style.display = "none",
                home.style.display = "flex";
            collect.style.display = "none"
        }
        
    })
}
DisplayProducts(navBarCollection,cartItem,homepage,collection)
// adding functionality to the addCart button on the item

function AddItemToCart(){{}
    addCart.forEach(addCart =>{
        addCart.addEventListener("click", (e)=>{
            numberOfItemOnChart += 1
            numberofCart.innerHTML = numberOfItemOnChart;
            numberOfitem.innerHTML=numberOfItemOnChart
           let Target=e.target;
            parent = Target.parentElement;
            console.log(parent)
            let itemName = parent.querySelector("p").innerHTML;
            itemPrice=parent.querySelector("span").innerHTML
            itemImage=parent.querySelector("img").src
          
                
            let itemdetails = `<div class="itemsOnCart">
                <div class="product">
                <img src="${itemImage}" >
                <h2>${itemName}</h2> 
                </div>
                <div>
                    <input type="number" value=1 class="quantity" min="1">
                </div>
                <div class="price">
                    <h2 class="priceValue">${itemPrice}</h2>
                    <div class="itemPrice">
                        <h2 class="totalPrice">${itemPrice}</h2>
                    </div>
                </div>
                <div class="btn2">
                <button>remove</button>
                </div>
            </div>
            `
            itemContainer.innerHTML += itemdetails;

            
            let itemQuantity = document.querySelectorAll(".itemsOnCart")
            function ItemTotalPrice() {
                for (let i = 0; i < itemQuantity.length; i++){
                    let amount = itemQuantity[i].querySelectorAll(".quantity")
                    for (let i = 0; i < amount.length; i++) {
                        amount[i].addEventListener("change", (e) => {
                            let parent = e.target.parentNode.parentNode;
                            let quantity = e.target.value;
                            let initial = parent.querySelector(".priceValue").innerHTML;
                            let initialPrice = parseInt(initial.replace("$", ""));
                            let totalValue = quantity * initialPrice;
                            let totalPrice=parent.querySelector(".totalPrice").innerHTML=`$${totalValue}`
                        })
                    }
                      console.log(amount)  

                }
            }
            ItemTotalPrice()

            function RemoveProduct() {
                for (let i = 0; i < itemQuantity.length; i++){
                    let removeBotton = itemQuantity[i].querySelectorAll(".btn2");
                    for (let i = 0; i < removeBotton.length; i++){
                        removeBotton[i].addEventListener("click", (e) => {
                            numberOfItemOnChart -= 1
                            numberofCart.innerHTML = numberOfItemOnChart;
                            numberOfitem.innerHTML=numberOfItemOnChart
                            let parent = e.target.parentElement.parentElement;
                            parent.remove()
                            console.log(numberOfItemOnChart)
                        })
                    }
                }
            }
            RemoveProduct()
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