let userName = document.querySelector('#userName')
let userEamil = document.querySelector('#userEmail')
let userPass = document.querySelector('#userPass')
let ErrorMsg = document.querySelector('#ErrorMsg')
let succesMsg = document.querySelector('#succesMsg')
let signUpButton = document.querySelector('button')
let userList = []

if (localStorage.getItem('users')) {

    userList = JSON.parse(localStorage.getItem('users'))

}


function register() {

    if (isEmpty() != true) {

        if (isExist() != true) {

            let user = {
                name: userName.value,
                email: userEamil.value,
                pass: userPass.value
            }
            userList.push(user)
            localStorage.setItem('users', JSON.stringify(userList))
            ErrorMsg.innerHTML = ''
            succesMsg.innerHTML = 'account registerd succuscfully'
        }

    }


}


function isEmpty() {

    if (userName.value == '' || userEamil.value == '' || userPass.value == '') {
        ErrorMsg.innerHTML = 'all inputs is required'
        return true
    }
}


function isExist() {

    for (let i = 0; i < userList.length; i++) {
        
        if (userList[i].email == userEamil.value) {
            ErrorMsg.innerHTML = 'email already exist'
            return true
        }
    }
}

signUpButton.addEventListener('click', register)