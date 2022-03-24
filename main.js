 $('#order').click(function(event) {
   event.preventDefault();
   $('#show').show();
 });

var type
var size
var topy
var quantity
var crust

var orders=[]

$('#add-order').click(function(event) {
     event.preventDefault();
     addOrder();
   });
  
  function addOrder (){
   const order= getOrder();
    orders.push(order);
      displayOrder(orders);
  };
  function getOrder (){
    const order={type,size,topy,quantity, crust};
    console.log(order);
    return order;
  };
  function displayOrder(orders){
    let orderList="";
    orders.forEach(order => {
      orderList+=`<li> Type: ${order.type}, Size: ${order.size} Toppings: ${order.topy}, Quantity: ${order.quantity}, Crust:${order.crust}</li>`;
    });
    document.getElementById("orders").innerHTML= orderList;
console.log(orderList);
  }
  

//  function Pizza (type,size,topy,quantity,crust) {
//   this.pizzaType= type;
//   this.pizzaSize = size;
//   this.pizzaTopy= topy;
//   this.pizzaQuantity=quantity;
//   this.pizzaCrust=crust;
//   console.log (Pizza);
//   };

//   const periperi{
//     size:small,
//     price:850,
//     crust:stuffed,    
//   },
// {   size:medium,
//     price:850,
//     crust:stuffed, 

// },

   
  // let Prices={ "size":{
  //   "small": 500,
  //   "medium": 800,


$(".type").on("change", (event) => {
   type = event.target.getAttribute("data-pizza-type")
   console.log(type)
 })  
 $(".size").on("change", (event) => {
  size = event.target.getAttribute("data-pizza-size")
  console.log(size)
})  
$(".topy").on("change", (event) => {
  topy = event.target.getAttribute("data-pizza-topy")
  console.log(topy)
}) 
$(".quantity").on("change", (event) => {
  quantity = event.target.getElementById("num")
  console.log(typeof quantity)
})   
$(".crust").on("change", (event) => {
  crust= event.target.getAttribute("data-pizza-crust")
  console.log(crust)
});





 




