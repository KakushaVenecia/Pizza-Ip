 $('#order').click(function(event) {
   event.preventDefault;
   $('#show').show();
 });

 function Pizza (type,size,topy,quantity,crust) {
  this.pizzaType= type;
  this.pizzaSize = size;
  this.pizzaTopy= topy;
  this.pizzaQuantity=quantity;
  this.pizzaCrust=crust;
  };

  let Prices={ "size":{
    "small": 500,
    "medium": 800,

  let type
  let size
  let topy
  let quantity
  let crust

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
  quantity = event.target.getAttribute("data-pizza-quantity")
  console.log(quantity)
})   
$(".crust").on("change", (event) => {
  crust= event.target.getAttribute("data-pizza-crust")
  console.log(crust)
})  


// THE SAME THING.
//  function eat(){
//  }
//  let eat = () => {
//  }

 
  let smallOne= new Pizza ("peri", "small", "pine","crusty");
  let smallTwo= new Pizza ("bbq", "small", "pine","crusty");
  let smallThree= new Pizza ("haw", "small", "pine","crusty");
  let smallFour= new Pizza ("veg", "small", "pine","crusty");
  let smallFive= new Pizza ("pep", "small", "pine","crusty");
};


 




