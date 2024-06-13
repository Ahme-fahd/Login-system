var logoutBtn=document.querySelector(".logout");
var welcomeMessage=document.querySelector("#welcomeMsg")
// var  allUsersUsed=JSON.parse(localStorage.getItem("Users"));
// var userName=localStorage.getItem("userName");
// console.log(userName);


if(localStorage.getItem("userName")!=null){
  welcomeMessage.innerHTML=`welcom ${localStorage.getItem("userName")} `;
}









logoutBtn.addEventListener("click", function(){

  localStorage.removeItem("userName")

location.href="./index.html";

}  )

