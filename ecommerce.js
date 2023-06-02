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

let previousCartImage = [];

let numberOfItemOnChart=0;
let addCart;
let parent;

const products=[
    {
        name:"nike shoe",
        picture:"assets/add1.jpeg",
        price: "$200",
        id: "pro1",
        otherPart:["assets/add1.jpeg","assets/add4.jpg","assets/Add7.jpg","assets/shoe1.png"]
    },
    {
        name:"adidas 3",
        picture:"assets/add2.png",
        price: "$200",
        id:"pro2"
    },
    {
        name:"adidas 3",
        picture:"assets/add4.jpg",
        price: "$200",
        id:"pro3"
    },
    {
        name:"adidas airforec 2",
        picture:"assets/Add7.jpg",
        price: "$200",
        id:"pro4"
    },
    {
        name:"adidas sheo",
        picture:"assets/shoe1.png",
        price: "$200",
        id:"pro5"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe3.jpeg",
        price: "$200",
        id:"pro6"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe4.jpeg",
        price: "$200",
        id:"pro7"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe5.jpeg",
        price:"$200",
        id:"pro8"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe7.jpeg",
        price: "$200",
        id:"pro9"
    },
    {
        name:"nike shoe",
        picture:"assets/shoe8.jpeg",
        price: "$200",
        id:"pro10"
        
    },
]
let product="";

function Products(){
    for(let i=0;i<products.length; i++){
          product +=`<div class="pro-items" id=${products[i].id}>
          <div class='pro'>
                <img src=${products[i].picture}>
                <div class="about">
                <p>${products[i].name}</p>
                <span>${products[i].price}</span>
            </div>
          </div>
          <button class="addCart">Add to cart</button>
          </div>`
         mainProduct.innerHTML=product
        let addCart = document.querySelectorAll(".addCart")
        let productItems = document.querySelectorAll(".pro")
        Redirect(productItems)
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
        addCart.addEventListener("click", (e) => { 
            numberOfItemOnChart += 1
            numberofCart.innerHTML = numberOfItemOnChart;
            numberOfitem.innerHTML = numberOfItemOnChart;
           DisplayPayment(numberOfItemOnChart,payMent)
           let Target=e.target;
            parent = Target.parentElement;
            let itemName = parent.querySelector("p").innerHTML;
            itemPrice=parent.querySelector("span").innerHTML
            itemImage=parent.querySelector("img").src
             
           
                
           
            let itemdetails = `<div class="itemsOnCart" id=>
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
                
            // check if an item is already in the cart
            //  if (previousCartImage.includes(itemImage)) {
            //     null
            // } else {
            //      previousCartImage.push(itemImage)
                 
            // }
            
           
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
                            let totalPriceOfItems = 0;
                            let parent = e.target.parentNode.parentNode;
                            let quantity = e.target.value;
                            let initial = parent.querySelector(".priceValue").innerHTML;
                            let initialPrice = parseInt(initial.replace("$", ""));
                            let totalValue = quantity * initialPrice;
                            let subtotal = toTal += initialPrice;
                            let totalPrice = parent.querySelector(".totalPrice").innerHTML = `$${totalValue}`
                           
                        //   suming up all the totalPrice
                            let allCartItems = document.querySelectorAll(".totalPrice");
                            for (let i = 0; i < allCartItems.length; i++){
                                let Value = allCartItems[i].innerHTML;
                                let Value2 = parseInt(Value.replace("$", ""))
                                totalPriceOfItems += Value2;
                            }
                            subTotalPrice.innerHTML = `$${totalPriceOfItems}`;
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
                            numberOfitem.innerHTML = numberOfItemOnChart;
                            DisplayPayment(numberOfItemOnChart,payMent)
                            let parent = e.target.parentElement.parentElement;
                            parent.remove()
                            let removeTotalPrice = parent.querySelector(".totalPrice").innerHTML
                            let removeTotalPrice2 = parseInt(removeTotalPrice.replace("$", ""))
                            let currentSubTotal = subTotalPrice.innerHTML;
                            console.log(previousCartImage)

                            // to remove image from the previous array;

                            // let imageIndex = previousCartImage.indexOf(itemImage)
                            // if (imageIndex !== -1) {
                            //     previousCartImage.splice(imageIndex, 1)
                            //     console.log(previousCartImage.length)
                            //     console.log(previousCartImage)
                                
                            // }
                            
                            let currentSubTotal2 = parseInt(currentSubTotal.replace("$", ""));
                            let newTotal = currentSubTotal2 -= removeTotalPrice2 ;
                            subTotalPrice.innerHTML = `$${newTotal}`
                        })
                    }
                }
            }
            RemoveProduct()
        })
       })
}

//should redirect to the details page when you on the product image
let pict = ""
let currentImag = 0
let otherParts;
let mainPart;
function Redirect(placeholder) {
     
    placeholder.forEach(proDucts => {
       
        proDucts.addEventListener("click", (e) => {
            const mainBody=document.querySelector(".bodyMain")
            homepage.style.display = "none"
            collection.style.display = "none"
            mainBody.style.display = "flex"
            
            let Target = e.target;
            let product = Target.parentElement.parentElement.id;
            
            for (let i = 0; i < products.length; i++){
                if (products[i].id === product) {
                    otherParts = products[i].otherPart
                    mainPart=products[i].picture
                }
            }
            for (let i = 0; i < 4; i++){
               pict += ` <div>
                        <img src=${otherParts[i]}>
                     </div>`
                document.querySelector(".others").innerHTML=pict
            }
            let displayImage = document.querySelector(".displayed");
            displayImage.innerHTML=`<img src=${otherParts[currentImag]}>`
            console.log(mainPart)

            
        })   
    })
    // 
}
function NextBackBtn() {
    function Next() {
        let nextBtn = document.querySelector(".next")
      console.log(nextBtn)
        nextBtn.addEventListener("click", () => {
            currentImag += 1;
            if (currentImag === 4) {
                currentImag=0
            }
            let displayImage = document.querySelector(".displayed");
            displayImage.innerHTML=`<img src=${otherParts[currentImag]}>`
        })
    }
    function Back() {
        let backBtn = document.querySelector(".previous")
        backBtn.addEventListener("click", () => {
            currentImag -= 1;
            if (currentImag === 0) {
                currentImag=4
            }
            let displayImage = document.querySelector(".displayed");
            displayImage.innerHTML=`<img src=${otherParts[currentImag]}>`
            console.log(currentImag)
        })
    }
    Back()
    Next()
}
NextBackBtn()
Redirect()
