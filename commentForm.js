// Get references to the form and the container where saved comments will be displayed
let commentForm = document.getElementById("comment-form");
let savedCommentsContainer = document.getElementById("saved-comments-container");

// Function to handle form submissions
function handleFormSubmit(event) {
  event.preventDefault(); 

  // Get the user input from the form fields
  let nameInput = document.getElementById("name");
  let commentInput = document.getElementById("comment");
  let name = nameInput.value;
  let comment = commentInput.value;

  // Clear the form fields after submission
  nameInput.value = "";
  commentInput.value = "";

  // Create a new comment entry in HTML
  let commentEntry = document.createElement("div");
  commentEntry.classList.add("comment-entry");

  let nameElement = document.createElement("h3");
  nameElement.textContent = name;

  let commentElement = document.createElement("p");
  commentElement.textContent = comment;

  commentEntry.appendChild(nameElement);
  commentEntry.appendChild(commentElement);

  // This Adds the new comment entry to the saved comments container
  savedCommentsContainer.appendChild(commentEntry);
}

// Add event listener to the form's submit button
commentForm.addEventListener("submit", handleFormSubmit);
