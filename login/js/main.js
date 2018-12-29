function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;
if ( username == "name" && password == "password"){
alert ("Login successful");
window.location = "second_page.html";
return false;
}
else{
alert("Login incorrect");
}
}