"use strict"


//identify variables
let usersDropdown = document.getElementById("theUsersDropdown");
let todoTableBody = document.getElementById("usersToDosInfoTable");

//wireup onload functions 

window.onload = () => {
    populateUsersDropdown();
    usersDropdown.onchange = onUsersDropdownChange;
}





//function to make dropdown (display:user's name , value:User Id)
function populateUsersDropdown() {
    fetch("http://localhost:8083/api/users")
        .then((response) => response.json())
        .then(users => {
            users.forEach(user => {
                let optionElement = document.createElement('option');
                optionElement.value = user.id;
                optionElement.textContent = user.name;
                usersDropdown.appendChild(optionElement);
            });
        }
        )
}


//function to get all tasks for a specific user id
function onUsersDropdownChange() {
    let selectedUser = usersDropdown.value;
    console.log(selectedUser);

    fetch("http://localhost:8083/api/todos/byuser/" + selectedUser)
        .then((response) => response.json())
        .then(todos => displayAllTodos(todos))

}


//function to display a task for specific user id
function displayAllTodos(todos) {



 todoTableBody.innerHTML = "";

   
   
    for (let todo of todos){
        let row = todoTableBody.insertRow(-1);

        let cell1 = row.insertCell(0);
        cell1.innerHTML = todo.id;

        let cell2 = row.insertCell(1);
        cell2.innerHTML = todo.category;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = todo.deadline;

        let cell4 = row.insertCell(3);
        cell4.innerHTML = todo.priority;

        let cell5 = row.insertCell(4);
        cell5.innerHTML = todo.completed;
    
        let cell6 = row.insertCell(5);
        cell6.innerHTML = todo.description;
}

}
