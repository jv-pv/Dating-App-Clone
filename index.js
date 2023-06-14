import dogsData from "./data.js"
import Dog from './Dog.js'
const likeBadge = document.querySelector('.badge-like')
const dislikeBadge = document.querySelector('.badge-dislike')
const likeBtn = document.querySelector('.like-btn')
const dislikeBtn = document.querySelector('.dislike-btn')
const fadeContainer = document.querySelector('.fade-container')
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

likeBtn.addEventListener('click', like)
dislikeBtn.addEventListener('click', dislike)

function getNewDog() {
    currentDogIndex++
    // currentDogIndex = (currentDogIndex + 1) % dogsData.length 
    currentDog = new Dog(dogsData[currentDogIndex])
    loopBack()
    render()
}

function like() {
    likeBtn.disabled = true
    if (likeBtn) {
        likeBadge.classList.add('active')
        setTimeout(() => {
            fadeContainer.classList.add('like')
        }, 600);
    }
    setTimeout(() => {
        likeBadge.classList.remove('active')
    }, 500);
    setTimeout(() => {
        likeBtn.disabled = false
        fadeContainer.classList.remove('like')
        currentDog.setMatchStatus(true)
        getNewDog()
    }, 1000)
}

function dislike() {
    dislikeBtn.disabled = true
    if (dislikeBtn) {
        dislikeBadge.classList.add('active')
        setTimeout(() => {
            fadeContainer.classList.add('dislike')
        }, 600);
    }
    setTimeout(()=> {
        dislikeBadge.classList.remove('active')
    }, 500)
    setTimeout(()=> {
        dislikeBtn.disabled = false
        fadeContainer.classList.remove('dislike')
        currentDog.setMatchStatus(false)
        getNewDog()
    }, 1000)
}
    

function loopBack() {
    let finalIndex = dogsData.length - 1
    if (currentDogIndex > finalIndex) {
        currentDogIndex = 0
        currentDog = new Dog(dogsData[currentDogIndex])
    }
}


function render() {
    document.querySelector('.fade-container').innerHTML = currentDog.setDogHtml()
}

render()