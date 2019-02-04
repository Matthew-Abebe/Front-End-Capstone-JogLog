
let loginUserNameField = document.createElement("fieldset")

let loginUserNameLabel = document.createElement("label")
loginUserNameLabel.textContent = "username"
loginUserNameLabel.setAttribute("for", "user_name")
let loginUserNameInput = document.createElement("input")
loginUserNameInput.setAttribute("id", "user_name")
loginUserNameInput.setAttribute("name", "user_name")

loginUserNameField.appendChild(loginUserNameLabel)
loginUserNameField.appendChild(loginUserNameInput)

let loginUserEmailField = document.createElement("fieldset")

let loginUserEmailLabel = document.createElement("label")
loginUserEmailLabel.textContent = "email address"
loginUserEmailLabel.setAttribute("for", "user_email")
let loginUserEmailInput = document.createElement("input")
loginUserEmailInput.setAttribute("id", "user_email")
loginUserEmailInput.setAttribute("name", "user_email")

loginUserEmailField.appendChild(loginUserEmailLabel)
loginUserEmailField.appendChild(loginUserEmailInput)

let loginFormFragment = document.createDocumentFragment()
loginFormFragment.appendChild(loginUserNameField)
loginFormFragment.appendChild(loginUserEmailField)

let loginFormArticle = document.querySelector(".output_loginform")
loginFormArticle.appendChild(loginFormFragment)


// let loginButton = document.createElement("button")
// loginButton.textContent = "Login"
