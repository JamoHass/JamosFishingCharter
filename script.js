// Function to save the content when the Save button is clicked
function saveContent(button) {
  // Get the parent element of the clicked button
  const parentElement = button.parentElement;

  // Get the necessary content from the parent element
  const title = parentElement.querySelector("h1").textContent;
  const description = parentElement.querySelector("p").textContent;
  
  // Create an object to store the content
  const savedContent = {
      title: title,
      description: description,
  };

  // Get the existing saved content from local storage (if any)
  let existingSavedContent = JSON.parse(localStorage.getItem("savedContent")) || [];

  // Add the new content to the existing saved content
  existingSavedContent.push(savedContent);

  // Save the updated saved content to local storage
  localStorage.setItem("savedContent", JSON.stringify(existingSavedContent));

  // Show an alert with the number of items in the "Save for Later" folder
  const numSavedItems = existingSavedContent.length;
  alert(`Content saved for later! There are ${numSavedItems} items in the "Save for Later" folder.`);

  // Update saved count
  updateSavedCount();
}
// Load saved content from local storage and display it
function displaySavedContent() {
  const savedContentContainer = document.getElementById("savedContentContainer");

  // Get the saved content from Local Storage
  const savedContent = JSON.parse(localStorage.getItem("savedContent"));

  // Clear the container before adding new content
  savedContentContainer.innerHTML = "";

  // Check if there is any saved content
  if (savedContent && savedContent.length > 0) {
    savedContent.forEach((content, index) => {
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("saved-content-item");

      const titleElement = document.createElement("h2");
      titleElement.textContent = content.title;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = content.description;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteSavedContent(index));

      contentDiv.appendChild(titleElement);
      contentDiv.appendChild(descriptionElement);
      contentDiv.appendChild(deleteButton);

      savedContentContainer.appendChild(contentDiv);
    });
  } else {
    // If there is no saved content, display a message
    savedContentContainer.textContent = "No content saved for later.";
  }
}

// Function to delete a saved content item
function deleteSavedContent(index) {
  const savedContent = JSON.parse(localStorage.getItem("savedContent"));

  if (savedContent && savedContent.length > 0) {
    savedContent.splice(index, 1);
    localStorage.setItem("savedContent", JSON.stringify(savedContent));
    displaySavedContent(); 
  }
  // Update saved count
  updateSavedCount();
}

// Function to update the saved count
function updateSavedCount() {
  const savedContent = JSON.parse(localStorage.getItem("savedContent")) || [];
  const savedCountElement = document.getElementById("saved-count");
  savedCountElement.textContent = savedContent.length;
}

// Call the function to display saved content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  displaySavedContent();
  updateSavedCount();
});

function saveComment(name, comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    const nameElement = document.createElement("h3");
    nameElement.innerText = name;

    const commentTextElement = document.createElement("p");
    commentTextElement.innerText = comment;

    commentElement.appendChild(nameElement);
    commentElement.appendChild(commentTextElement);

    savedCommentsContainer.appendChild(commentElement);
}

//chained effects!
function chainedEffects() {
   var element = document.getElementById("targetElement");
   
   // Effect 1: Change background color to red
   element.style.backgroundColor = "red";
   
   setTimeout(function() {
     // Effect 2: Increase font size
     element.style.fontSize = "24px";
     
     setTimeout(function() {
       // Effect 3: Change text color to blue
       element.style.color = "blue";
     }, 1000); 
   }, 1000); 
 }

 // Function to handle the like action for a specific item
 $(document).ready(function() {
  $(".like-button").on("click", function() {
    // Get the current like count from the data attribute
    let currentLikes = parseInt($(this).attr("data-likes"));

    // Increment the like count
    currentLikes++;

    // Update the data attribute with the new like count
    $(this).attr("data-likes", currentLikes);

    // Update the like count text in the adjacent span element
    $(this).next(".likeCount").text(`${currentLikes} Likes`);
  });
});

//js code to toggle visibility
function toggleVisibility(elementId) {
  let element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

