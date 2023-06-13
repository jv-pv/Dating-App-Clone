// Remember to import the data and Dog class!
import dogsData from "./data.js"
import Dog from './Dog.js'
const likeBadge = document.querySelector('.badge-like')
const dislikeBadge = document.querySelector('.badge-dislike')
const likeBtn = document.querySelector('.like-btn')
const dislikeBtn = document.querySelector('.dislike-btn')
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

likeBtn.addEventListener('click', like)
dislikeBtn.addEventListener('click', dislike)

function getNewDog() {
    currentDogIndex += 1
    // currentDogIndex = (currentDogIndex + 1) % dogsData.length 
    currentDog = new Dog(dogsData[currentDogIndex])
    loopBack()
    render()
}

function like() {
    likeBtn.disabled = true
    if (likeBtn) {
        likeBadge.classList.add('active')
    }
    setTimeout(() => {
        likeBtn.disabled = false
        likeBadge.classList.remove('active')
        currentDog.setMatchStatus(true)
        getNewDog()
    }, 1500)
}

function dislike() {
    dislikeBtn.disabled = true
    if (dislikeBtn) {
        dislikeBadge.classList.add('active')
    }

    setTimeout(()=> {
        dislikeBtn.disabled = false
        dislikeBadge.classList.remove('active')
        currentDog.setMatchStatus(false)
        getNewDog()
    }, 1500)
}
    

function loopBack() {
    let finalIndex = dogsData.length - 1
    if (currentDogIndex > finalIndex) {
        // console.log(`Final Index: ${finalIndex} Current Index: ${currentDogIndex}`)
        currentDogIndex = 0
        currentDog = new Dog(dogsData[currentDogIndex])
    }
}


function render() {
    document.querySelector('.user-profiles-container').innerHTML = currentDog.setDogHtml()
}

render()