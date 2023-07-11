const form = document.getElementById("form");
const username = document.getElementById("username");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const inputArr = [username,emailInput,password,password2]



function showError(input,message){
    const formControl= input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = message
}



function showSuccess(input){
  console.log("success")
  const formControl= input.parentElement;
  formControl.className = "form-control success"

}



function checkEmail(emailInput) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

  if(emailPattern.test(emailInput.value.trim())){
   showSuccess(emailInput)
  }else{
    showError(emailInput,"Email is not valid")
  }
}


function checkRequired(inputArr){
  inputArr.forEach(function(input){
   if(input.value ===""){
    showError(input, `${getFieldName(input)} is required`)
   }else{
    showSuccess(input)
   }
  })
}


function checkLength(input,min,max){
  if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`)
  }else if(input.value.length>max){
    showError(input,`${getFieldName(input)} must be lass than ${max} characters`)
  }else{
    showSuccess(input)
  }
  
}


function checkPasswordsMatch(p1,p2){
  console.log(p1.value)
  console.log(typeof p2.value)
  if(p1.value===p2.value){
    showSuccess(password,password2)
  }else{
    showError(password2,"password do not match")
  }
}


function getFieldName(input){
  return input.id.slice(0,1).toUpperCase()+input.id.slice(1).toLowerCase();
}



form.addEventListener("submit",function(e) {
    e.preventDefault();
 

   checkRequired(inputArr)
   checkLength(username,3,15)
   checkLength(password,6,25)
   checkEmail(emailInput)
   checkPasswordsMatch(password, password2)
  


 
});

