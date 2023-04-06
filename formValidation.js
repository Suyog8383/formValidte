function validate() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let email = document.getElementById("email").value;
  if (name === "" || pass === "" || cpass === "" || email === "") {
    alert("please enter all details");
  } else if (name.length < 4) {
    alert("name length must be greater than 4");
  } else if (pass.length < 5) {
    alert("password length greater than 5");
  } else if (pass != cpass) {
    alert("enter correct password");
  } else {
    alert("success");
  }
}
