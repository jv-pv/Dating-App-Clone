// Remember to import the data and Dog class!
import dogsData from "./data.js"
import Dog from './Dog.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

document.querySelector('.like-btn').addEventListener('click', like)
document.querySelector('.dislike-btn').addEventListener('click', dislike)

function getNewDog() {
    currentDogIndex += 1
    console.log(`This is the current dog index ${currentDogIndex}`)
    currentDog = new Dog(dogsData[currentDogIndex])
    loopBack()
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