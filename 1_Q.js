function addToCart(name, price, quantity) {
    if (!name) {
      throw new Error("Product name is required.");
    }
  
    if (typeof price !== "number" || price <= 0) {
      throw new Error("Invalid product price.");
    }
  
    if (typeof quantity !== "number" || quantity <= 0 || quantity % 1 !== 0) {
      throw new Error("Invalid quantity.");
    }
  }
  
  /* Task 2
  
  function checkout() { 
    // Check if the cart is empty
    if (cart.length === 0) {
      throw new Error("Cart is empty. Add items before checkout.");
    }
  
    // Proceed with the checkout process
    // ...
  }
  */
  /*Login
  
  function login(username, password) {
   if (!username) {
    throw new Error("Username is required.");
  }

  if (!password) {
    throw new Error("Password is required.");
  }

  // Check if the username and password match any valid credentials
  // For demonstration purposes, assume we have a users object with valid credentials
  const users = {
    johnDoe: "password123",
    janeDoe: "password456",
  };

  if (!(username in users) || users[username] !== password) {
    throw new Error("Invalid username or password.");
  }

  // Login successful
  // ...
} */