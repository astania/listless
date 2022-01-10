//Globals
const baseUrl = "http://localhost:3000"

//Node getters
const mainDiv = () => document.getElementById('main')
const homeLink = () => document.getElementById('home-link')
const listLink = () => document.getElementById('list-link')
const mealLink = () => document.getElementById('meal-link')

//Event Listeners

const attachHomePageLinkEvent = () => {
    homeLink().addEventListener('click', loadHome)
}

const attachListLinkEvent = () => {
    listLink().addEventListener('click', loadList)
}

const attachMealLinkEvent = () => {
    mealLink().addEventListener('click', loadMeals)
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
    h1.innerText = 'Welcome to LISTLESS'
    h4.innerText = "Listless allows you to sort your shopping list into categories, so you won't leave the dairy section without grabbing oat milk ever again!"

    
    mainDiv().appendChild(h1)
    mainDiv().appendChild(h4)
}

const loadList = event => {
    event.preventDefault()
    resetMainDiv()
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const form = document.createElement('form')
    const rowDiv = document.createElement('div')
    const div1 = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const div2 = document.createElement('div')


    h1.innerText = 'Your Shopping List'
    p.innerText = 'enter your items and their categories below:'
    
    
    rowDiv.className = 'row'

    div1.className = 'input-field col s6'
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'grocery item')
    
    label.setAttribute('for', 'grocery item')
    label.innerText = "Grocery Item"
    
    div1.appendChild(input)
    div1.appendChild(label)
    
    rowDiv.appendChild(div1)
    rowDiv.appendChild(div2)
    form.appendChild(rowDiv)
    mainDiv().appendChild(h1)
    mainDiv().appendChild(p)
    mainDiv().appendChild(form)

}

const loadMeals = event => {
    event.preventDefault()
    resetMainDiv()

    const h1 = document.createElement('h1')
    const button = document.createElement('a')
    const div = document.createElement('div')
    const randomMealDiv = document.createElement('div')
    

    div.className = "center-align"
    randomMealDiv.className = "col s12 m7"
    
    h1.innerText = "Can't decide what to eat?"

    button.className = "waves-effect waves-light btn orange lighten-2"
    button.innerText = "Click Here"

    randomMealDiv.setAttribute('id','random')

    button.addEventListener('click', getRandomMeal)
    
    div.appendChild(h1)
    div.appendChild(button)

    mainDiv().appendChild(div)
    mainDiv().appendChild(randomMealDiv)
}

const loadRandomMeal = (meal) => {
    const randomMealDiv = document.getElementById('random')
    randomMealDiv.innerHTML = ''
    const header = document.createElement('h2')
    const horizontalDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const mealPicture = document.createElement('img')
    const stackedDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    const content = document.createElement('p')
    const actionDiv = document.createElement('div')
    const mealLink = document.createElement('a')
    const linkText = document.createTextNode("Get the Recipe")

    header.className = "header"
    header.innerText = 'You should make:'
    
    horizontalDiv.className = "card horizontal"

    imageDiv.className = "card-image"
    mealPicture.src = meal.image

    content.innerText = meal.meal

    mealLink.href = meal.link
    mealLink.title = "Get the Recipe"


    actionDiv.className = 'card-action'
    contentDiv.className = 'card-content'
    stackedDiv.className = 'card-stacked'


    mealLink.appendChild(linkText)
    actionDiv.appendChild(mealLink)
    randomMealDiv.appendChild(header)
    randomMealDiv.appendChild(horizontalDiv)
    imageDiv.appendChild(mealPicture)
    contentDiv.appendChild(content)
    stackedDiv.appendChild(contentDiv)
    stackedDiv.appendChild(actionDiv)
    horizontalDiv.appendChild(stackedDiv)
    randomMealDiv.appendChild(header)
    randomMealDiv.appendChild(horizontalDiv)

}

//Requests

const getRandomMeal = () => {
    const randomMeal = [Math.ceil(Math.random()*6)]
    fetch(baseUrl + '/meals' + "/" + randomMeal)
    .then(response => response.json())
    .then(meal => loadRandomMeal(meal))
}

//NODE creators

const createColumn = columnSize => {
    const div = document.createElement('div')
    div.className = 'input-field col' + columnSize
    return div
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
    attachMealLinkEvent()
})

