// Function to display the saved content on the "Save for Later" page
function displaySavedContent() {
    const savedContentContainer = document.getElementById("savedContent");

    // Get the saved content from Local Storage
    const savedContent = JSON.parse(localStorage.getItem("savedContent"));

    // Check if there is any saved content
    if (savedContent && savedContent.length > 0) {
        // Loop through the saved content and create HTML elements to display it
        savedContent.forEach(content => {
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("saved-content-item");

            const titleElement = document.createElement("h4");
            titleElement.textContent = content.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = content.description;

            contentDiv.appendChild(titleElement);
            contentDiv.appendChild(descriptionElement);
            
            savedContentContainer.appendChild(contentDiv);
        });
    } else {
        // If there is no saved content, display a message
        savedContentContainer.textContent = "No content saved for later.";
    }
}

// Call the function to display saved content when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displaySavedContent();
});