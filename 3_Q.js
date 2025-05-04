function processPayment(amount, cardNumber, expirationDate) {
    // Validate the payment amount
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }
    
    // Validate the card number (basic validation assuming 16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
        throw new Error("Invalid card number.");
    }
    
    // Validate the expiration date
    const currentDate = new Date();
    const [month, year] = expirationDate.split("/").map(Number);
    
    if (!month || !year || month < 1 || month > 12 || year < currentDate.getFullYear() || 
        (year === currentDate.getFullYear() && month < (currentDate.getMonth() + 1))) {
        throw new Error("Invalid expiration date.");
    }
    
    // If all checks pass, the payment is successful
    console.log("Payment processed successfully!");
}

try {
    processPayment(50.25, "1234567890123456", "12/25");  // Successful payment
    processPayment(-10, "invalidCardNumber", "05/22");   // Should throw an error: "Invalid payment amount." and "Invalid card number."
    processPayment(100.75, "9876543210987654", "01/20"); // Should throw an error: "Invalid expiration date."
} catch (error) {
    console.error(error.message);
}