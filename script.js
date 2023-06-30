const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener("submit",function(e) {
    e.preventDefault();
    console.log(e)
});

