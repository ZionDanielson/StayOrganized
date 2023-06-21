"use strict"

//identify variables

const userDropdown = document.getElementById("userDropdown");
const categoryDropdown = document.getElementById("categoryDropdown");
const priorityDropdown = document.getElementById("priorityDropdown");
const todoDescriptionInput = document.getElementById("todoDescriptionInput");
const todoDeadlineInput = document.getElementById("todoDeadlineInput");
const addTodoBtn = document.getElementById("addTodoBtn");




//wireup onload
window.onload = function() {

    //     const userDropdown = document.getElementById("userDropdown");
    //     const categoryDropdown = document.getElementById("categoryDropdown");
    //     const priorityDropdown = document.getElementById("priorityDropdown");
    // //    const todoDescriptionInput = document.getElementById("todoDescriptionInput");
    //   //  const todoDeadlineInput = document.getElementById("todoDeadlineInput");

        userDropdown.addEventListener("change", function() {
                console.log("User Selected: ", userDropdown.value);
              });
            
              categoryDropdown.addEventListener("change", function() {
                console.log("Category Selected: ", categoryDropdown.value);
              });

              priorityDropdown.addEventListener("change", function() {
                console.log("Priority Selected: ", priorityDropdown.value);
              });

              addTodoBtn.addEventListener("click", onAddTodoBtnClicked)
              console.log(`Added ${todoDescriptionInput.value}`)
            

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

const priorityValues = ["Select Priority","Low", "Medium", "High"];

priorityValues.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.toLowerCase();
  optionElement.text = option;
  priorityDropdown.appendChild(optionElement);
});


// POST request to add TODO

// let bodyData = {
//   userid : userDropdown.value,
//   category : categoryDropdown.value,
//   description:todoDescriptionInput.value,
//   deadline: todoDeadlineInput.value,
//   priority: priorityDropdown.value,
// }

function onAddTodoBtnClicked(){

  let bodyData = {
    userid : userDropdown.value,
    category : categoryDropdown.value,
    description:todoDescriptionInput.value,
    deadline: todoDeadlineInput.value,
    priority: priorityDropdown.value,
  }

  fetch("http://localhost:8083/api/todos", {
 method: "POST",
 body: JSON.stringify(bodyData),
 headers: {"Content-type":
 "application/json; charset=UTF-8"}
 })
 .then(response => response.json())
 .then(json => {
  let message = `${json.description} added.`
  alert(message)
 })
 .catch(err => {
  // If the POST returns an error, display a message
  let message = "Error. Please make sure all fields are filled."
  alert(message)
  });
}