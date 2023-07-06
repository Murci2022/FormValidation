const form = document.getElementById("form");
const username = document.getElementById("username");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/* Show input error */
function showError(input,message){
    const formControl= input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = message
}

/* Show input success outline */

function showSuccess(input){
  console.log("success")
  const formControl= input.parentElement;
  formControl.className = "form-control success"

}

function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the pattern
  return emailPattern.test(String(email).toLocaleLowerCase());
}

function validateEmail(emailInput) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email value against the pattern
  return emailPattern.test(String(emailInput.value).toLowerCase());
}


/* Event Listeners */
form.addEventListener("submit",function(e) {
    e.preventDefault();
  console.log(username.value)

   //username check
   if(username.value===""){
    showError(username, "Username is required")
  }else{
    showSuccess(username)
  }
  //email check
  if(emailInput.value === ""){
    showError(emailInput,"Email is required")
  }
  else if(!validateEmail(email)){
    showError(emailInput,"Not a valid email")
   

  }else{
    showSuccess(emailInput)
  }
  //password check
  if(password.value === ""){
    showError(password,"Password is required")
  }else{
    showSuccess(password)
  }

  //password2 check
  if(password2.value ===""){
    showError(password2,"Password 2 is required")
  }else{
    showSuccess(password2)
  }


 
});

