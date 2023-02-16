// Add saved items to saved page
// Get the element where the saved items will be displayed
var savedItemsDiv = document.getElementById("saved-items");
// Get the saved items from local storage
var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
// Loop through the saved items and add them to the page
savedItems.forEach(function(item) {
    // Create a new element to display the item
    var itemDiv = document.createElement("img");
    itemDiv.src = item;
    itemDiv.class = "savedImage"
    // Append the new element to the saved items container
    savedItemsDiv.appendChild(itemDiv);
});