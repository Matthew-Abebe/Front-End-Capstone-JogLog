import runsCollection from "./runsCollection"

const registerUserForm = {
    registerUserAndAppendForm() {

        let registerHeader = document.createElement("h2")
        registerHeader.textContent = "JogLog - Register"

        let registerUserNameField = document.createElement("fieldset")

        let registerUserNameLabel = document.createElement("label")
        registerUserNameLabel.textContent = "Name"
        registerUserNameLabel.setAttribute("for", "register_name")
        let registerUserNameInput = document.createElement("input")
        registerUserNameInput.setAttribute("id", "register_name")
        registerUserNameInput.setAttribute("name", "register_name")

        registerUserNameField.appendChild(registerUserNameLabel)
        registerUserNameField.appendChild(registerUserNameInput)

        let registerUserEmailField = document.createElement("fieldset")

        let registerUserEmailLabel = document.createElement("label")
        registerUserEmailLabel.textContent = "Email"
        registerUserEmailLabel.setAttribute("for", "register_email")
        let registerUserEmailInput = document.createElement("input")
        registerUserEmailInput.setAttribute("id", "register_email")
        registerUserEmailInput.setAttribute("name", "register_email")

        registerUserEmailField.appendChild(registerUserEmailLabel)
        registerUserEmailField.appendChild(registerUserEmailInput)

        let registerUserButton = document.createElement("button")
        registerUserButton.textContent = "Register"
        registerUserButton.addEventListener("click", this.handleRegisterUser)

        let registerUserFormFragment = document.createDocumentFragment()

        registerUserFormFragment.appendChild(registerHeader)
        registerUserFormFragment.appendChild(registerUserNameField)
        registerUserFormFragment.appendChild(registerUserEmailField)
        registerUserFormFragment.appendChild(registerUserButton)

        let registerUserArticleOutput = document.querySelector(".output_registerform")

        registerUserArticleOutput.appendChild(registerUserFormFragment)
    },

    handleRegisterUser(event ,  registerUserName , registerUserEmail) {
        console.log("hi")
        let inputRegisterUserName = document.querySelector("#register_name").value
        let inputRegisterUserEmail = document.querySelector("#register_email").value

        let registeredUser = {
            name: inputRegisterUserName,
            email: inputRegisterUserEmail
    }
    console.log(registeredUser)

    runsCollection.postRegisterUser(registeredUser)
    .then(response => {
        console.log(response)
    })
}
}

export default registerUserForm;
