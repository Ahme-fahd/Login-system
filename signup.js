var nameInput=document.querySelector(".name");
var signUpMail=document.querySelector(".signUpMail");
var signUpPass=document.querySelector(".signUpPass");
var allSignupInputs=document.querySelector("#allSignInputs");
var checkMail=document.querySelector("#checkMail");
var signin=document.querySelector("#signIn");
var signUpBtn=document.querySelector(".signUpBtn");
var checkPass=document.querySelector("#checkSignPass");
var checkName=document.querySelector("#checkName");
var allUsers=[];



if(localStorage.getItem("Users")!=null){
allUsers=JSON.parse(localStorage.getItem("Users"));
}





function validateSignUpName(){
    var regexUserName=/^[a-zA-Z]{4,8}$/;

if(regexUserName.test(nameInput.value)==false ){
checkName.innerHTMLL="Enter your name";

} else{
checkName.innerHTML="Success";
}
}



nameInput.addEventListener("keyup",function(){
    validateSignUpName();
})








function signInPressed(){
    location.replace("./index.html");
       
    
    
       
    }
        signin.addEventListener("click", function(){
    signInPressed();
    
        } )
    





// allUsers.filter(item=> )

// }
 


console.log(allUsers);
    
// }



signUpBtn.addEventListener("click",function(){
  

var user ={
    name:nameInput.value,
    email:signUpMail.value,
    password:signUpPass.value,
}



if(nameInput.value==""||signUpPass.value==""||signUpMail.value=="" ){
 return allSignupInputs.innerHTML="All inputs is required";



}


if(compareValues()==true )
{
 allSignupInputs.innerHTML="Email Already Exist";

}else{
allSignupInputs.innerHTML="Success";
}


allUsers.push(user);
localStorage.setItem("Users",JSON.stringify(allUsers));



})






function validateSignUpPass(){
    var regexUserPass=/^[0-9a-z]{8,}$/i;
if(regexUserPass.test(signUpPass.value)==false){
checkPass.innerHTML="Enter complex pass";

}else{
    checkPass.innerHTML="Good Pass";
}


}
signUpPass.addEventListener("keyup",function(){
    validateSignUpPass();
});




function checkSignMail(){

var regexMail=/[^\s]*@[a-z0-9.-]*/i;


if(regexMail.test(signUpMail.value)==false){

checkMail.innerHTML="Enter valid mail";

}else{
    checkMail.innerHTML="Valid";
}



}

signUpMail.addEventListener("keyup", function(){
    checkSignMail();
} )



function compareValues(){
for(var i=0;i<allUsers.length;i++){

if(allUsers[i].email==signUpMail.value ){
return true;
} 







}



}