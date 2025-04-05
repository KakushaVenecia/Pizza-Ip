document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  let type = '';
  let size = '';
  let topy = '';
  let crust = '';
  let quantity = 1;
  let orders = [];
  
  // Price lists
  const pizzaPrices = {
    "Periperi": {
      "Small": 850,
      "Medium": 1300,
      "Large": 2000
    },
    "BBQ": {
      "Small": 800,
      "Medium": 1200,
      "Large": 1800
    },
    "Hawaiian": {
      "Small": 800,
      "Medium": 1200,
      "Large": 1800
    },
    "Veggie": {
      "Small": 500,
      "Medium": 900,
      "Large": 1200
    },
    "Pepperoni": {
      "Small": 800,
      "Medium": 1200,
      "Large": 1800
    }
  };
  
  const toppingPrices = {
    "Pineapple": 100,
    "Mozarella Cheese": 200,
    "Peas": 100,
    "Mushrooms": 100
  };
  
  // Show order form when "Order Now" button is clicked
  const orderBtn = document.getElementById('order-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', function() {
      const orderForm = document.getElementById('order-form');
      if (orderForm) {
        orderForm.classList.remove('hidden');
        
        // Smooth scroll to order section
        document.getElementById('order').scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Radio button change handlers
  const typeRadios = document.querySelectorAll('.type');
  typeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      type = this.getAttribute('data-pizza-type');
      console.log('Pizza type selected:', type);
      updateOrderForm();
    });
  });
  
  const sizeRadios = document.querySelectorAll('.size');
  sizeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      size = this.getAttribute('data-pizza-size');
      console.log('Pizza size selected:', size);
      updateOrderForm();
    });
  });
  
  const toppyRadios = document.querySelectorAll('.topy');
  toppyRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      topy = this.getAttribute('data-pizza-topy');
      console.log('Topping selected:', topy);
      updateOrderForm();
    });
  });
  
  const crustRadios = document.querySelectorAll('.crust');
  crustRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      crust = this.getAttribute('data-pizza-crust');
      console.log('Crust selected:', crust);
      updateOrderForm();
    });
  });
  
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    quantityInput.addEventListener('change', function() {
      quantity = parseInt(this.value) || 1;
      console.log('Quantity updated:', quantity);
      updateOrderForm();
    });
  }
  
  // Add order button
  const addOrderBtn = document.getElementById('add-order-btn');
  if (addOrderBtn) {
    addOrderBtn.addEventListener('click', function() {
      if (!type || !size || !crust || quantity < 1) {
        alert('Please select pizza type, size, crust and enter a valid quantity!');
        return;
      }
      
      const pizzaPrice = pizzaPrices[type][size] || 0;
      const toppingPrice = topy ? toppingPrices[topy] || 0 : 0;
      const totalPrice = (pizzaPrice + toppingPrice) * quantity;
      
      const order = {
        type,
        size,
        topy: topy || 'None',
        crust,
        quantity,
        price: totalPrice
      };
      
      orders.push(order);
      displayOrders();
      
      // Reset form for next order (keeping the crust type)
      const currentCrust = crust;
      resetForm();
      crust = currentCrust;
      const crustRadio = document.querySelector(`input[data-pizza-crust="${crust}"]`);
      if (crustRadio) crustRadio.checked = true;
      
      alert(`${size} ${type} Pizza added to your order!`);
    });
  }
  
  // Submit order button
  const submitOrderBtn = document.getElementById('submit-order-btn');
  if (submitOrderBtn) {
    submitOrderBtn.addEventListener('click', function() {
      if (orders.length === 0) {
        alert('Please add at least one pizza to your order!');
        return;
      }
      
      const totalAmount = calculateTotalAmount();
      alert(`Your order of ${orders.length} pizza(s) totaling ${totalAmount} has been placed. Thank you for choosing Tasty Pizza!`);
      
      // Reset everything
      orders = [];
      resetForm();
      displayOrders();
    });
  }
  
  // Helper functions
  function updateOrderForm() {
    // This function can be used to update dynamic content in the form
    // For example, showing the current price based on selections
    if (type && size) {
      const pizzaPrice = pizzaPrices[type][size] || 0;
      const toppingPrice = topy ? toppingPrices[topy] || 0 : 0;
      const totalPrice = (pizzaPrice + toppingPrice) * quantity;
      console.log('Current selection total: ' + totalPrice);
    }
  }
  
  function resetForm() {
    type = '';
    size = '';
    topy = '';
    crust = '';
    quantity = 1;
    
    // Reset form inputs
    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
      radio.checked = false;
    });
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
      quantityInput.value = 1;
    }
  }
  
  function displayOrders() {
    let orderList = '';
    let totalAmount = calculateTotalAmount();
    
    orders.forEach(function(order, index) {
      orderList += `<li>${order.quantity}x ${order.size} ${order.type} Pizza with ${order.topy} topping on ${order.crust} crust - ${order.price}</li>`;
    });
    
    const ordersList = document.getElementById('orders-list');
    if (ordersList) {
      ordersList.innerHTML = orderList;
    }
    
    const totalPrice = document.getElementById('total-price');
    if (totalPrice) {
      totalPrice.textContent = `Total: ${totalAmount}`;
    }
  }
  
  function calculateTotalAmount() {
    return orders.reduce(function(total, order) {
      return total + order.price;
    }, 0);
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
