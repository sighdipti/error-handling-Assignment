function login(username, password) {
    // Define valid credentials for the purpose of this example
    const validUsername = "user123";
    const validPassword = "password123";
    
    // Check if username is provided
    if (!username) {
        throw new Error("Username is required.");
    }
    
    // Check if password is provided
    if (!password) {
        throw new Error("Password is required.");
    }
    
    // Check if username and password match valid credentials
    if (username !== validUsername || password !== validPassword) {
        throw new Error("Invalid username or password.");
    }
    
    // If all checks pass, login is successful
    console.log("Login successful!");
}

try {
    login("user123", "password123"); // Successful login
    login("", "password456");         // Should throw an error: "Username is required."
    login("user456", "");             // Should throw an error: "Password is required."
    login("invalidUser", "invalidPassword"); // Should throw an error: "Invalid username or password."
} catch (error) {
    console.error(error.message);
}