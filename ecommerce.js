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
const adidas = document.querySelector(".adidas")
const payMent = document.querySelector(".payment")
const subTotalPrice=document.querySelector("#sub")

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
        let addCart = document.querySelectorAll(".addCart")
        AddItemToCart(addCart)
      }
}
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
        let addCart = document.querySelectorAll(".addCart")
        AddItemToCart(addCart)
    
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
        if (cartItem.style.display === "") {
            collection.style.display = "none",
                homepage.style.display = "none";
            cartItem.style.display = "grid";
        } else {
            collection.style.display = "grid",
            homepage.style.display = "none";
            cartItem.style.display = "";
        }
    })
}
DisplayCart()    
    

function DisplayProducts() {
    navBarCollection.addEventListener("click", () => {
        if (collection.style.display === "") {
            collection.style.display = "grid",
                homepage.style.display = "none";
            cartItem.style.display = "";
            product = ''
            Products()
        } else {
            collection.style.display = "",
            homepage.style.display = "flex";
            cartItem.style.display = "";
        }
    })
}
DisplayProducts()
// display payment section
function DisplayPayment(number,payment){
    if (number >= 1) {
        payment.style.display="block"
    } else {
        payment.style.display="none"
    }
}
// adding functionality to the addCart button on the item

function AddItemToCart(placeholder){
    placeholder.forEach(addCart =>{
        addCart.addEventListener("click", (e)=>{
            numberOfItemOnChart += 1
            numberofCart.innerHTML = numberOfItemOnChart;
            numberOfitem.innerHTML = numberOfItemOnChart
           DisplayPayment(numberOfItemOnChart,payMent)
           let Target=e.target;
            parent = Target.parentElement;
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
            let allTotalPrice = document.querySelectorAll(".totalPrice")


            function SumTotal() {
                let total = 0;
                for (let i = 0; i < allTotalPrice.length; i++){
                    let subPrice = allTotalPrice[i].innerHTML;
                    let subPrice2 = parseInt(subPrice.replace("$", ""))
                    total += subPrice2
                    
                }
                subTotalPrice.innerHTML = `$${total}`
                
                return total;
            }
            let toTal = SumTotal()
            
            let subtotal;


            // computing total price of the product when the quantity increase or decrease
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
                            let subtotal = toTal += initialPrice;
                            let totalPrice = parent.querySelector(".totalPrice").innerHTML = `$${totalValue}`
                            subTotalPrice.innerHTML = `$${subtotal}`
                        })
                    }

                }
            }
            ItemTotalPrice()

        //   removing items from the cart
            
            function RemoveProduct() {
                for (let i = 0; i < itemQuantity.length; i++){
                    let removeBotton = itemQuantity[i].querySelectorAll(".btn2");
                    for (let i = 0; i < removeBotton.length; i++){
                        removeBotton[i].addEventListener("click", (e) => {
                            numberOfItemOnChart -= 1
                            numberofCart.innerHTML = numberOfItemOnChart;
                            numberOfitem.innerHTML = numberOfItemOnChart
                            DisplayPayment(numberOfItemOnChart,payMent)
                            let parent = e.target.parentElement.parentElement;
                            parent.remove()
                            let removeTotalPrice = parent.querySelector(".totalPrice").innerHTML
                            let removeTotalPrice2 = parseInt(removeTotalPrice.replace("$", ""))
                            let currentSubTotal = subTotalPrice.innerHTML;
                            let currentSubTotal2 = parseInt(currentSubTotal.replace("$", ""));
                            let newTotal = currentSubTotal2 -= removeTotalPrice2 ;
                            console.log(newTotal)
                            subTotalPrice.innerHTML = `$${newTotal}`
                        })
                    }
                }
            }
            RemoveProduct()
        })
       })
}

// let sneakersData = function(){
//     fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-04-24&sortBy=publishedAt&apiKey=623632dd405a4b0e984728cc40574cb7").then(function (respons) {
//         return respons.json();
//     }).then(function (data) {
//         console.log(data)
//     });
// }
// sneakersData()