// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Create a button dynamically
    const button = document.createElement("button");
    button.innerText = "Click Me!";
    document.body.appendChild(button);

    // Add a click event listener
    button.addEventListener("click", function() {
        alert("Hello! Welcome to my GitHub Pages site.");
    });
});
