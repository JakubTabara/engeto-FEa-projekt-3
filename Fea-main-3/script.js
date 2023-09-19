const visIcon = document.querySelector(".vis-icon")
const visColor = document.querySelector("main")
const changeVisIcon = document.querySelector(".fa-regular")
const header = document.querySelector("header")
const menuList = document.querySelector("nav")



visIcon.addEventListener("click", () => {
    if (changeVisIcon.classList[1] === "fa-moon") {
        changeVisIcon.classList.add("fa-sun")
        changeVisIcon.classList.remove("fa-moon")
        visColor.style.backgroundBlendMode = "darken"
        header.style.backgroundColor = "#757575"
        header.style.boxShadow = "0px 5px 10px 10px #757575"
        menuList.style.backgroundColor = "#757575"
        menuList.style.boxShadow = "0px 0px 10px 10px #757575"
    } else {
        changeVisIcon.classList.add("fa-moon")
        changeVisIcon.classList.remove("fa-sun")
        visColor.style.backgroundBlendMode = "lighten"
        header.style.backgroundColor = "#b9b9b9"
        header.style.boxShadow = "0px 5px 10px 10px #b9b9b9"
        menuList.style.backgroundColor = "#b9b9b9"
        menuList.style.boxShadow = "0px 0px 10px 10px #b9b9b9"
    }
})


const menuIcon = document.querySelector(".menu-icon")
const changeMenuIcon = document.querySelector(".fa-solid")
const menuSpacing = document.querySelector("h1")


menuIcon.addEventListener("click", () => {
    if (changeMenuIcon.classList[1] === "fa-bars") {
        changeMenuIcon.classList.add("fa-circle-xmark")
        changeMenuIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
        menuSpacing.style.paddingTop = "100px"
    } else {
        changeMenuIcon.classList.add("fa-bars")
        changeMenuIcon.classList.remove("fa-circle-xmark")
        menuList.style.display = "none"
        menuSpacing.style.paddingTop = "0px"
    }
})


const passField = document.querySelector("form")
const passSetup = document.querySelector(".p-setup")
const passConfirm = document.querySelector(".p-confirm")
const notPassword = document.querySelector(".notification-setup")
const notConfirm = document.querySelector(".notification-confirm")

passField.addEventListener("submit", (event) => {
    event.preventDefault()

    if (passSetup.value === "") {
        notPassword.style.display = "block"
    } else {
        notPassword.style.display = "none"
    }

    if (passConfirm.value === "") {
        notConfirm.style.display = "block"
    } else {
        notConfirm.style.display = "none"
    }
})


const passMatch = document.querySelector(".match")
const passNonMatch = document.querySelector(".non-match")
const getInputContent = (input) => {
    return input.value
}

passSetup.addEventListener("input", () => {
    const passSetupValue = getInputContent(passSetup)
    const passConfirmValue = getInputContent(passConfirm)

    if (passSetupValue === passConfirmValue) {
        passMatch.style.display = "block"
        passNonMatch.style.display = "none"
    } else {
        passMatch.style.display = "none"
        passNonMatch.style.display = "block"
    }

    if (passSetupValue === "" && passConfirmValue === "")
        passMatch.style.display = "none"
})

passConfirm.addEventListener("input", () => {
    const passSetupValue = getInputContent(passSetup)
    const passConfirmValue = getInputContent(passConfirm)

    if (passSetupValue === passConfirmValue) {
        passMatch.style.display = "block"
        passNonMatch.style.display = "none"
    } else {
        passMatch.style.display = "none"
        passNonMatch.style.display = "block"
    }

    if (passSetupValue === "" && passConfirmValue === "")
        passMatch.style.display = "none"
})


const returnButton = document.querySelector(".return")


window.addEventListener("scroll", () => {

    if(window.scrollY >= 100) {
        returnButton.style.display = "block"
    } else {
        returnButton.style.display = "none"
    }
})

returnButton.addEventListener("click", () => {

    header.scrollIntoView({behavior: "smooth"})
})