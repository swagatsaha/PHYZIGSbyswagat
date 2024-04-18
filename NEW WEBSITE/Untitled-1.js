// Retrieve the logged numbers from local storage
var loggedNumbers = JSON.parse(localStorage.getItem("loggedNumbers")) || [];

// Output the logged numbers to the console
console.log("Logged Numbers:", loggedNumbers);

// Display the logged numbers on the webpage
var loggedNumbersList = document.createElement("ul");
loggedNumbers.forEach(function(number) {
    var listItem = document.createElement("li");
    listItem.textContent = number;
    loggedNumbersList.appendChild(listItem);
});
document.body.appendChild(loggedNumbersList);
