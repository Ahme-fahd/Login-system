let userName = localStorage.getItem('userName')
let welcomeMsg = document.querySelector('#welcome')




function welcome() {
    if (localStorage.getItem('userName')) {

        welcomeMsg.innerHTML = `welcome ${userName}`
    }else{
        window.location.href='index.html'
    }
}


document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('userName')
    window.location.href = 'index.html'
})