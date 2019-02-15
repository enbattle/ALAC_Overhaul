/* Validates the Register page so that all fields are filled in */
function validate(formObj) {
  var errormessage = "Error Occurred!";
  var problem = true;
  
  if (formObj.email.value == "") {
    errormessage += "\nYou must enter an RPI Email!";
    problem = false;
  }

  if (formObj.RIN.value == "") {
    errormessage += "\nYou must enter a Rensselaer ID!";
    problem = false;
  }

  if (formObj.username.value == ""){
    errormessage += "\nYou must enter a username!";
    problem = false;
  }
  
  if (formObj.password.value == ""){
    errormessage += "\nYou must enter an password!";
    problem = false;
  }
  
  if (formObj.confirmpass.value == ""){
    errormessage += "\nYou must confirm your password!";
    problem = false;
  }

  /*Return a success alert if all fieds are filled in*/
  if(problem == true){
      
    /* Passwords must match, or there is no registration */
    if(formObj.password.value != formObj.confirmpass.value){
      alert("Passwords do not match!");
      return false;
    }
    else{
      alert("Successfully Registered!");
      window.open('LogIn.html', '_self');
      return false;
    }
  }
  else{
    alert(errormessage);
    return false;
  }
}

/* Function to check the Log In page to make sure all fields are filled */
function validatelog(formObj){
  var errormessage = "Error Occurred!";
  var problem = true;
  
  if (formObj.username.value == "Username/Email") {
    errormessage += "\nYou must enter an RPI Email or Username!";
    problem = false;
  }

  if (formObj.password.value == "Password") {
    errormessage += "\nYou must enter a correct Password!";
    problem = false;
  }
    
  if(problem == true){
    alert("Login Successful!");
    window.open('profile.html', '_self');
    return false;
  }
  else{
    alert(errormessage);
    return false;
  }
}

/* Functions for the Log In page to make the fields clear or blur */
function textAreaClear(element) {
  if (element.value == "Password"){
    element.value = "";
  }
  if (element.value == "Username/Email"){
    element.value = "";
  }
}

function textAreaBlur(element) {
  if (element.value == ""){
    if(element.name == "Password"){
      element.value = "Password";
    }
    if(element.name == "Username/Email"){
      element.value = "Username/Email";
    }
  }
}
