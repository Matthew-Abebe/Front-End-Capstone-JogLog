//put in an object and export as a method import into main.js and call it//
const loginForm = {
    getAndAppendLogin() {

let loginHeader = document.createElement("h2")
loginHeader.textContent = "JogLog"

let loginUserNameField = document.createElement("fieldset")

let loginUserNameLabel = document.createElement("label")
loginUserNameLabel.textContent = "Username"
loginUserNameLabel.setAttribute("for", "user_name")
let loginUserNameInput = document.createElement("input")
loginUserNameInput.setAttribute("id", "user_name")
loginUserNameInput.setAttribute("name", "user_name")

loginUserNameField.appendChild(loginUserNameLabel)
loginUserNameField.appendChild(loginUserNameInput)

let loginUserEmailField = document.createElement("fieldset")

let loginUserEmailLabel = document.createElement("label")
loginUserEmailLabel.textContent = "Email Address"
loginUserEmailLabel.setAttribute("for", "user_email")
let loginUserEmailInput = document.createElement("input")
loginUserEmailInput.setAttribute("id", "user_email")
loginUserEmailInput.setAttribute("name", "user_email")

loginUserEmailField.appendChild(loginUserEmailLabel)
loginUserEmailField.appendChild(loginUserEmailInput)

// let loginUserButton = document.createElement("button")
// loginUserButton.textContent = "Login"
// loginUserButton.setAttribute("class", "login_button")

// let registerUserButton = document.createElement("button")
// registerUserButton.textContent = "Register"
// registerUserButton.setAttribute("class", "register_button")

let loginFormFragment = document.createDocumentFragment()
loginFormFragment.appendChild(loginHeader)
loginFormFragment.appendChild(loginUserNameField)
loginFormFragment.appendChild(loginUserEmailField)
// loginFormFragment.appendChild(loginUserButton)
// loginFormFragment.appendChild(registerUserButton)

let loginFormArticle = document.querySelector(".output_loginform")
loginFormArticle.appendChild(loginFormFragment)
    },

}

export default loginForm;
