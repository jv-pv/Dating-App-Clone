class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
 
    setDogHtml() {
        const {name, avatar, age, bio} = this;
        return `
        <div class="dog-profile-wrapper">
                <img class="profile-img" style="width: 100%; height: 100%;" src="${avatar}">
                <span class="name-age">${name}, ${age}</span>
                <span class="caption">${bio}</span>
        </div>
        `
    }
}

export default Dog