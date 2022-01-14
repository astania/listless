//Globals
const baseUrl = 'http://localhost:3000'



//Node getters
const mainDiv = () => document.getElementById('main')
const homeLink = () => document.getElementById('home-link')
const listLink = () => document.getElementById('list-link')
const mealLink = () => document.getElementById('meal-link')
const groceryItem = () => document.getElementById('grocery-item')
const category = () => document.getElementById('category')
const shoppingListDiv = () => document.getElementById('list-div')
const freshCategory = () => document.getElementById('category-fresh')
const meatCategory = () => document.getElementById('category-meat')
const dairyCategory = () => document.getElementById('category-dairy')
const grainCategory = () => document.getElementById('category-grain')
const miscCategory = () => document.getElementById('category-misc')
const tryAgainBtn = () => document.getElementById('try-again')
const logoHomeLink = () => document.getElementById('logo-home')
const randomBtn = () => document.getElementById('random-button')



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

const attachHomeLinkEvent = () => {
    logoHomeLink().addEventListener('click', loadHome)
}


//Event Handlers

const loadHome = event => {
    if (event) {
        event.preventDefault()
    }

    resetMainDiv()
    const h1 = document.createElement('h1')
    const h4 = document.createElement('h4')
    const shoppingIcon = document.createElement('i')

    h1.className = 'center-align'
    h4.className = 'center-align container'
    shoppingIcon.className = 'large material-icons'
    shoppingIcon.style.verticalAlign = 'middle'
    h1.innerText = 'Welcome to LISTLESS'
    h4.innerText = 'Never leave the dairy section without grabbing oat milk ever again!'
    shoppingIcon.textContent = 'shopping_cart'

    mainDiv().appendChild(h1)
    mainDiv().appendChild(h4)
    h1.appendChild(shoppingIcon)
}

const loadList = event => {
    event.preventDefault()
    resetMainDiv()
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const topHeading = document.createElement('h4')
    const form = document.createElement('form')
    const listDiv = document.createElement('div')
    const rowDiv = document.createElement('div')
    const div1 = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const div2 = createSelectField('category', 's3', 'Category', 'Category', ['Fresh', 'Meat', 'Dairy', 'Grain', 'Misc'])
    const submit = document.createElement('button')
    const fresh = document.createElement('h6')
    const meat = document.createElement('h6')
    const dairy = document.createElement('h6')
    const grain = document.createElement('h6')
    const misc = document.createElement('h6')

    listDiv.setAttribute('id', 'list-div')

    topHeading.innerText = 'Shopping List'
    topHeading.className = 'center-align'

    h2.innerText = 'Add Items to the Shopping List'
    h2.className = 'center-align'
    p.innerText = 'enter your items and their categories below:'
    p.className = 'center-align'

    rowDiv.className = 'row'
    rowDiv.style.marginTop = '30px'

    div1.className = 'input-field col s6'
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'grocery-item')

    label.setAttribute('for', 'grocery item')
    label.innerText = 'Grocery Item'

    submit.setAttribute('type', 'submit')
    submit.setAttribute('id', 'submit-form')
    submit.style.marginTop = '20px'
    submit.className = 'btn waves-effect waves-light orange lighten-2'
    submit.innerText = 'Add to list'

    fresh.innerText = 'Fresh'
    fresh.setAttribute('id', 'category-fresh')
    meat.innerText = 'Meats'
    meat.setAttribute('id', 'category-meat')
    dairy.innerText = 'Dairy'
    dairy.setAttribute('id', 'category-dairy')
    grain.innerText = 'Grain'
    grain.setAttribute('id', 'category-grain')
    misc.innerText = 'Misc.'
    misc.setAttribute('id', 'category-misc')

    div1.appendChild(input)
    div1.appendChild(label)
    rowDiv.appendChild(div1)
    rowDiv.appendChild(div2)
    form.appendChild(rowDiv)
    rowDiv.appendChild(submit)
    listDiv.appendChild(topHeading)
    listDiv.appendChild(fresh)
    listDiv.appendChild(meat)
    listDiv.appendChild(dairy)
    listDiv.appendChild(grain)
    listDiv.appendChild(misc)
    mainDiv().appendChild(h2)
    mainDiv().appendChild(p)
    mainDiv().appendChild(form)
    mainDiv().appendChild(listDiv)
    form.addEventListener('submit', submitForm)

    //initializer for materialize form input javascript
    $(document).ready(function () {
        $('select').formSelect();
    });
}

const submitForm = event => {
    event.preventDefault()
    const ul = document.createElement('ul')
    const shoppingItem = document.createElement('li')
    const deleteButton = document.createElement('button')

    shoppingItem.innerText = capitalizeFirstLetter(groceryItem().value)
    shoppingItem.style.listStyle = 'circle'
    shoppingItem.style.marginLeft = '50px'

    deleteButton.textContent = 'x'
    deleteButton.setAttribute('class', 'waves-effect waves-light btn-small')
    deleteButton.style.marginLeft = '8px'
    deleteButton.addEventListener('click', deleteItem)

    shoppingItem.appendChild(deleteButton)
    ul.appendChild(shoppingItem)

    const selectorValue = category().value

    if (selectorValue === 'Fresh') {
        freshCategory().appendChild(ul)
    } else if (selectorValue === 'Meat') {
        meatCategory().appendChild(ul)
    } else if (selectorValue === 'Dairy') {
        dairyCategory().appendChild(ul)
    } else if (selectorValue === 'Grain') {
        grainCategory().appendChild(ul)
    } else if (selectorValue === 'Misc') {
        miscCategory().appendChild(ul)
    }
}


const deleteItem = event => {
    event.target.parentNode.remove()
}

const loadMeals = event => {
    event.preventDefault()
    resetMainDiv()

    const h1 = document.createElement('h1')
    const button = document.createElement('a')
    const div = document.createElement('div')
    const randomMealDiv = document.createElement('div')

    div.className = 'center-align'
    randomMealDiv.className = 'col s12 m7'

    h1.innerText = 'Can\'t decide what to eat?'

    button.className = 'waves-effect waves-light btn orange lighten-2'
    button.setAttribute('id', 'random-button')
    button.innerText = 'Click Here'

    randomMealDiv.setAttribute('id', 'random')

    button.addEventListener('click', getRandomMeal)

    div.appendChild(h1)
    div.appendChild(button)

    mainDiv().appendChild(div)
    mainDiv().appendChild(randomMealDiv)
}


const loadRandomMeal = (meal) => {
    const randomMealDiv = document.getElementById('random')
    randomMealDiv.innerHTML = ''
    randomBtn().innerText = 'Try again?'
    const header = document.createElement('h2')
    const horizontalDiv = document.createElement('div')
    const imageDiv = document.createElement('div')
    const mealPicture = document.createElement('img')
    const stackedDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    const content = document.createElement('p')
    const actionDiv = document.createElement('div')
    const mealLink = document.createElement('a')
    const linkText = document.createTextNode('Get the Recipe')

    header.className = 'header'
    header.innerText = 'You should make:'

    horizontalDiv.className = 'card horizontal card small'

    imageDiv.className = 'card-image'
    mealPicture.src = meal.image

    content.className = 'card-title'
    content.innerText = meal.meal

    mealLink.href = meal.link
    mealLink.title = 'Get the Recipe'
    mealLink.setAttribute('target', '_blank')

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
    horizontalDiv.appendChild(imageDiv)
    horizontalDiv.appendChild(stackedDiv)
    randomMealDiv.appendChild(header)
    randomMealDiv.appendChild(horizontalDiv)
}


//Requests

const getRandomMeal = () => {
    const randomMeal = Math.ceil(Math.random() * 6)
    fetch(baseUrl + '/meals' + '/' + randomMeal)
        .then(response => response.json())
        .then(meal => loadRandomMeal(meal))
}


//NODE creators

const createColumn = columnSize => {
    const div = document.createElement('div')
    div.className = 'input-field col ' + columnSize
    return div
}

const createSelectField = (id, colSize, placeholder, labelText, options = []) => {
    const div = createColumn(colSize);
    const select = document.createElement('select');
    const option = document.createElement('option');
    const label = document.createElement('label');

    select.setAttribute('id', id);
    option.setAttribute('disabled', true);
    option.setAttribute('selected', true);
    option.value = '';
    option.innerText = placeholder;
    label.setAttribute('id', id);
    label.innerText = labelText;

    select.appendChild(option);

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.innerText = optionText;
        option.value = optionText;
        select.appendChild(option);
    })

    div.appendChild(select);
    div.appendChild(label);

    return div;
}


//Misc

const resetMainDiv = () => {
    mainDiv().innerHTML = ''
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//WHEN THE DOM LOADS
document.addEventListener('DOMContentLoaded', function () {
    loadHome()
    attachHomePageLinkEvent()
    attachListLinkEvent()
    attachMealLinkEvent()
})

