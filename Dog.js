// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus() {
        
    }
 
    setDogHtml() {
        const {name, avatar, age, bio} = this;
        return `
        <div class="dog-profile-wrapper">
                <img class="profile-img" style="width: 100%; height: 100%;" src="${avatar}">
                <span class="name-age">${name}, ${age}</span>
                <span class="caption">${bio}</span>
            <div class="badge-container">
                <img class="badge-like" src="./images/badge-like.png" alt="like-badge">
                <img class="badge-dislike" src="./images/badge-nope.png" alt="dislike-badge">
            </div>
        </div>
        `
    }
}


export default Dog