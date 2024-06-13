var emailInput=document.querySelector(".email");
var passwordInput=document.querySelector(".pass");
var myBtn=document.querySelector(".login");
var form=document.querySelector("form");
var checkEmail=document.querySelector("#checkEmail");
var allInputs=document.querySelector("#allInputs");
var signUp=document.querySelector("#signUp");
var firstCheckPass=document.querySelector("#checkPass")
var checkName=document.querySelector("#checkMyName");
var allUsers=[];


if(localStorage.getItem("Users")!=null){
    allUsers=JSON.parse(localStorage.getItem("Users"));
    }
    
    



function validateInput(){

var regexEmail=/[^\s]*@[a-z0-9.-]*/i
var regexPassword=/^[0-9a-z]{8,}$/i;


if(regexEmail.test(emailInput.value)==false){
    checkEmail.innerHTML="Plz enter valid email";
   
    }else{
        checkEmail.innerHTML="Bravo";
    }

if(regexPassword.test(passwordInput.value)==false){

firstCheckPass.innerHTML="Plz enter complex pass";
// console.log("Enter valid pass");
}else{
firstCheckPass.innerHTML="Awesome";
}





}



passwordInput.addEventListener("keyup",function(){
validateInput();

} )
emailInput.addEventListener("keyup",function(){
    validateInput();
})



function addCredentials(){
   
    var user={
email:emailInput,
password:passwordInput,
    }
if(passwordInput.value==""||emailInput.value==""){
allInputs.innerHTML="All inputs is  Required";

}
else if(compareValues()==true){
    open("./welcome.html")


}else  {
    allInputs.innerHTML="Incorrect email or password";
 
}




// var allUsersUsed=JSON.parse(localStorage.getItem("Users"));


}




myBtn.addEventListener("click",function (){
    addCredentials();




})









function signUpPressed(){

    location.replace("./signup.html");
    
    
    }
    
    signUp.addEventListener("click",function(){
    open("./signup.html")
    
    
    
    
    } )
    



function compareValues(){

for(var i=0;i<allUsers.length;i++){

    if(allUsers[i].email==emailInput.value&&allUsers[i].password==passwordInput.value) {
        localStorage.setItem("userName",allUsers[i].name);  
        return true;
       
    }

  


};


}
