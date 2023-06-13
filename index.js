// Remember to import the data and Dog class!
import dogsData from "./data.js"
import Dog from './Dog.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

document.querySelector('.like-btn').addEventListener('click', like)
document.querySelector('.dislike-btn').addEventListener('click', dislike)

function getNewDog() {
    currentDogIndex += 1
    currentDog = new Dog(dogsData[currentDogIndex])
    console.log(currentDog.hasBeenLiked)
    render()
}

function like() {
    currentDog.setMatchStatus(true)
    getNewDog()
}

function dislike() {
    currentDog.setMatchStatus(false)
    getNewDog()
}

function render() {
    document.querySelector('.user-profiles-container').innerHTML = currentDog.setDogHtml()
}

render()