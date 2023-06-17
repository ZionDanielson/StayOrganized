"use strict"

//identify variables

const userDropdown = document.getElementById("userDropdown");
const categoryDropdown = document.getElementById("categoryDropdown");
const priorityDropdown = document.getElementById("priorityDropdown");
const todoDescriptionInput = document.getElementById("todoDescriptionInput");
const todoDeadlineInput = document.getElementById("todoDeadlineInput");




//wireup onload
window.onload = function() {

        const userDropdown = document.getElementById("userDropdown");
        const categoryDropdown = document.getElementById("categoryDropdown");
        const priorityDropdown = document.getElementById("priorityDropdown");
    //    const todoDescriptionInput = document.getElementById("todoDescriptionInput");
      //  const todoDeadlineInput = document.getElementById("todoDeadlineInput");

        userDropdown.addEventListener("change", function() {
                console.log("User Selected: ", userDropdown.value);
              });
            
              categoryDropdown.addEventListener("change", function() {
                console.log("Category Selected: ", categoryDropdown.value);
              });

              priorityDropdown.addEventListener("change", function() {
                console.log("Priority Selected: ", priorityDropdown.value);
              });
            

}

// populate username dropdown (fetch/loop through user)
function populateuserDropdown() {
        fetch("http://localhost:8083/api/users")
          .then(response => response.json())
          .then(user => {
            user.forEach(user => {
              const option = document.createElement("option");
              option.value = user.id;
              option.text = user.name;
              userDropdown.appendChild(option);
            });
          })
          .catch(error => {
            console.error("Error fetching users:", error);
          });
      }
      populateuserDropdown();


//populate category dropdown (fetch/loop through the todos.categories)

function populatecategoryDropdown() {
  fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(categories => {
      categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.text = category.name;
        categoryDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Error fetching categories:", error);
    });
}
populatecategoryDropdown();




//populate priority dropdown (hardcode the priorities)

const priorityValues = ["Low", "Medium", "High"];
const priorityDropdown = document.getElementById("priorityDropdown");

priorityValues.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.toLowerCase();
  optionElement.text = option;
  priorityDropdown.appendChild(optionElement);
});



