let signEmail = document.querySelector('#signEmail')
let signPass = document.querySelector('#signPass')
let ErrorMsg = document.querySelector('#signPass')
let loginButton = document.querySelector('button')
let userList = []

if (localStorage.getItem('users')) {
    userList = JSON.parse(localStorage.getItem('users'))
}


function login() {

    if (isEmpty() != true) {

        for( let i = 0 ; i<userList.length ; i++ ){

            if( userList[i].email == signEmail.value && userList[i].pass == signPass.value ){
                ErrorMsg.innerHTML =''
                localStorage.setItem('userName' , userList[i].name)
                window.location.href='home.html'  

            }else{

                ErrorMsg.innerHTML = 'email or password is incorrect'
                
            }
        }

    }

}

function isEmpty() {

    if (signEmail.value == '' || signPass.value == '') {
        ErrorMsg.innerHTML = 'all inputs is required'
        return true
    }
}


loginButton.addEventListener('click', login)