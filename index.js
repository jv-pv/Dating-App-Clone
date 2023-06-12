// Remember to import the data and Dog class!
import dogsData from "./data.js"
import Dog from './Dog.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
const container = document.getElementById('container')


function render() {
    document.querySelector('.user-profiles-container').innerHTML = currentDog.setDogHtml()
}


console.log(container)
console.log(currentDog.name)
render()