"use strict"


//identify variables
usersDropdown = document.getElementById("theUsersDropdown")


//wireup onload functions 

window.onload = () => {
    populateUsersDropdown();  
    onUsersDropdownChange();
}





//function to make dropdown (display:user's name , value:User Id)
function populateUsersDropdown(){
    fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then (users => {
       users.forEach(user=> {
        let optionElement = document.createElement('option');
        user.userid = optionElement.value;
        user.name = optionElement.textContent;
        usersDropdown.appendChild(optionElement);
       });
    }
    )
}


//function to get all tasks for a specific user id
function onUsersDropdownChange(){
    let selectedUser = usersDropdown.value
    console.log(selectedUser);

    fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then()

    displayAllTasksPerId(selectedUser);


}


//function to display tasks for specific user id
function displayAllTasksPerId(onUsersDropdownChange){

}
