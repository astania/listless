//Globals

//Node getters
const mainDiv = () => document.getElementById('main')
const homeLink = () => document.getElementById('home-link')
const formDiv = () => document.getElementById('form')

//Event Listeners

const attachHomePageLinkEvent = () => {
    homeLink().addEventListener('click', loadHome)
}



//Event Handlers

const loadHome = () => {
    resetMainDiv()
    const h1 = document.createElement('h1')
    const h4 = document.createElement('h4')

    h1.className = "center-align"
    h4.className = "center-align"
    h1.innerText = 'Welcome to Listless'
    h4.innerText = "Listless allows you to sort your shopping list into categories, so you won't leave the dairy section without grabbing oat milk ever again!"

    
    mainDiv().appendChild(h1)
    mainDiv().appendChild(h4)
}

const loadForm = () => {
    document.createElement('form')

}

//Misc

const resetMainDiv = () => {
    mainDiv().innerHTML = ''
}

//WHEN THE DOM LOADS
document.addEventListener('DOMContentLoaded', function(){
    //load the home page
    loadHome()
    attachHomePageLinkEvent()
})