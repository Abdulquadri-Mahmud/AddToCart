const product = [
     {
          id: 0,
          images: 'images/abaya2.jpg',
          title: 'Abaya',
          price: 120,
     },
     {
          id:1,
          images:'images/bag_shoe3.jpg',
          title:'Bag & Shoe',
          price: 60,
     },
     {
          id:2,
          images:'images/abaya3.jpg',
          title:'Abaya',
          price: 140,
     },
     {
          id:3,
          images:'images/girls_shoe1.jpg',
          title:'Girls Shoe',
          price: 110,
     },
     {
          id:4,
          images:'images/bag_shoe4.jpg',
          title:'Bag & Shoe',
          price: 100,
     },
     {
          id:5,
          images:'images/girls_shoe2.jpg',
          title:'Girls Shoe',
          price: 100,
     },
     {
          id:6,
          images:'images/abaya4.jpg',
          title:'Abaya',
          price: 100,
     },
     {
          id:7,
          images:'images/bag_shoe5.jpg',
          title:'Abaya',
          price: 100,
     },
]

const categories = [...new Set(product.map((item) => {
     return item;
}))]
let i = 0;
document.querySelector('#root').innerHTML = categories.map((item)=>{
     var {images,title,price} = item;
     return(
          `<div class="products_cont">
               <div class="product_wrap">
                    <div class='box'>
                         <div class='img-box'>
                              <img class='images' src=${images}></img>
                         </div>
                    </div>
                    <div class='bottom'>
                         <p>${title}</p>
                         <h2>$ ${price}.00</h2>
                         `+"<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                    `</div>
               </div>
          </div>`
     )
}).join('');

var cart = [];

const showcartbtn = document.querySelector('.showcartbtn');
const closeCartbtn = document.querySelector('.closeCart');
const showcarts = document.querySelector('.showcarts');
const sidebar1 = document.querySelector('.sidebar1');

showcartbtn.addEventListener('click',()=>{
     showcarts.style.height = '400px'
     closeCartbtn.style.display = 'block';
     sidebar1.style.display = 'block';
});
closeCartbtn.addEventListener('click',()=>{
     showcarts.style.height = '0px'
     closeCartbtn.style.display = 'none';
     sidebar1.style.display = 'none';
})


function addtocart(a){
     cart.push({...categories[a]});
     display_cart()
}
function deletecart(a){
     cart.splice(a,1);
     display_cart()
}
function display_cart(a){
     let j = 0, total = 0;
     document.getElementById('count').innerHTML = cart.length;
     if(cart.length == 0){
          const cartItem = document.getElementById('cartItem').innerHTML = "Your cart is empty";
          console.log(cartItem)
          document.getElementById('total').innerHTML = "$ "+0+".00";
     }else{
          document.getElementById("cartItem").innerHTML = cart.map((item)=>{
               var {images,title,price} = item;
               total = total + price;
               document.getElementById('total').innerHTML = "$ " + total + ".00";
               
               return (
                    `<div class="cart-item-cont">
                         <div class="cart-item">
                              <div class="row-img">
                                   <img class='rowing' src=${images}></img>
                              </div>
                              <p>${title}</p>
     
                              <h3>${price}.00</h3>` +
                              "<i class='fas fa-trash' onclick='deletecart("+(j++)+")'></i>" +
                         `</div>
                    </div>`
               )       
          }).join(' ');
     }
}