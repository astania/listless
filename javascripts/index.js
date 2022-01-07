//Globals

//Node getters
const mainDiv = () => document.getElementById('main')
const homeLink = () => document.getElementById('home-link')
//Event Listeners

//Event Handlers
const loadHome = () => {
    const h1 = document.createElement('h1')

    h1.className = "center-align"
    h1.innerText = 'Your List'
    
    mainDiv().appendChild(h1)
    
}


//WHEN THE DOM LOADS
document.addEventListener('DOMContentLoaded', function(){
    //load the home page
    loadHome()
})