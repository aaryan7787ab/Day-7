let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let btn = document.querySelector("button");
// Email access and focus move
email.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    pass1.focus();
  }
});
// pass1 access and focus moves
pass1.addEventListener("keydown", function (command) {
  if (command.key == "Enter") {
    pass2.focus();
  }
});
//pass2 access , condition and the result ..
pass2.addEventListener("keydown", function (check) {
  if (check.key == "Enter") {
    if (pass1.value === pass2.value) {
      btn.style.visibility = "visible";
      console.log("Operation is a success");
    } else {
      setTimeout(function () {
        alert("Password is incorrect");
      }, 3000);
    }
  }
});
