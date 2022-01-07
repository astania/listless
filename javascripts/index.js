//Globals

//Node getters
const mainDiv = () => document.getElementById('main')
const homeLink = () => document.getElementById('home-link')
const listLink = () => document.getElementById('list-link')

//Event Listeners

const attachHomePageLinkEvent = () => {
    homeLink().addEventListener('click', loadHome)
}

const attachListLinkEvent = () => {
    listLink().addEventListener('click', loadList)
}

//Event Handlers

const loadHome = event => {
    if(event){
        event.preventDefault()
    }
    resetMainDiv()
    const h1 = document.createElement('h1')
    const h4 = document.createElement('h4')

    h1.className = "center-align"
    h4.className = "center-align container"
    h1.innerText = 'Welcome to Listless'
    h4.innerText = "Listless allows you to sort your shopping list into categories, so you won't leave the dairy section without grabbing oat milk ever again!"

    
    mainDiv().appendChild(h1)
    mainDiv().appendChild(h4)
}

const loadList = event => {
    event.preventDefault()
    resetMainDiv()
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.className = "center-align"
    p.className = "center-align"

    h1.innerText = 'Your Shopping List'
    p.innerText = "enter your items and their categories below:"
    document.createElement('form')

    mainDiv().appendChild(h1)
    mainDiv().appendChild(p)

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
    attachListLinkEvent()
})