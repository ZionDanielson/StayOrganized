"use strict";

let bodyData = {
    username: document.getElementById("inputUsername").value,
    password: document.getElementById("inputPassword6").value,
    confirmPassword: document.getElementById("inputPassword6").value,
   }   

   fetch("http://localhost:8083/api/users", {
    method: "POST",
    body: JSON.stringify(bodyData)
    headers: {"Content-Type": "application/json"
    }
    
  })
  .then(response => response.json())
  .then(data => {
    console.log("User added successfully:", data);
  })
  .catch(error => {
    console.error("Error adding user:", error);
  });







