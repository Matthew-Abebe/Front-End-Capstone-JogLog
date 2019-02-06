const registerForm = {
    getAndAppendRegistration() {

let registerHeader = document.createElement("h2")
registerHeader.textContent = "Register"

let registerUserNameField = document.createElement("fieldset")

let registerUserNameLabel = document.createElement("label")
registerUserNameLabel.textContent = "Username"
registerUserNameLabel.setAttribute("for", "register_name")
let registerUserNameInput = document.createElement("input")
registerUserNameInput.setAttribute("id", "register_name")
registerUserNameInput.setAttribute("name", "register_name")

registerUserNameField.appendChild(registerUserNameLabel)
registerUserNameField.appendChild(registerUserNameInput)

let registerUserEmailField = document.createElement("fieldset")

let registerUserEmailLabel = document.createElement("label")
registerUserEmailLabel.textContent = "Email Address"
registerUserEmailLabel.setAttribute("for", "register_email")
let registerUserEmailInput = document.createElement("input")
registerUserEmailInput.setAttribute("id", "register_email")
registerUserEmailInput.setAttribute("name", "register_email")

registerUserEmailField.appendChild(registerUserEmailLabel)
registerUserEmailField.appendChild(registerUserEmailInput)

let registerButton = document.createElement("button")
registerButton.textContent = "Register"
registerButton.setAttribute("class", "login_button")

let registerFormFragment = document.createDocumentFragment()
registerFormFragment.appendChild(registerHeader)
registerFormFragment.appendChild(registerUserNameField)
registerFormFragment.appendChild(registerUserEmailField)
registerFormFragment.appendChild(registerButton)

let registerFormArticle = document.querySelector(".output_registerform")
registerFormArticle.appendChild(registerFormFragment)
    },

}

export default registerForm;
