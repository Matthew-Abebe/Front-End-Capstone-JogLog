import runsCollection from "./runsCollection"

const registerUserForm = {
    registerUserAndAppendForm(userObjectToRegister) {
        let registerUserNameField = document.createElement("h2")

        let registerUserNameLabel = document.createElement("label")
        registerUserNameLabel.textContent = "Name"
        let registerUserNameInput = document.createElement("input")
        registerUserNameInput.value = userObjectToRegister.name

        registerUserNameField.appendChild(registerUserNameLabel)
        registerUserNameField.appendChild(registersUserNameInput)

        let registerUserEmailField = document.createElement("h2")

        let registerUserEmailLabel = document.createElement("label")
        registerUserEmailLabel.textContent = "Email"
        let registerUserEmailInput = document.createElement("input")
        registerUserEmailInput.value = userObjectToRegister.email

        registerUserEmailField.appendChild(registerUserEmailLabel)
        registerUserEmailField.appendChild(registerUserEmailInput)

        let registerUserButton = document.createElement("button")
        registerUserButton.textContent = "Register"
        registerUserButton.addEventListener("click", this.handleRegisterUser)

        let registerUserFormFragment = document.createDocumentFragment()

        registerUserFormFragment.appendChild(registerUserNameField)
        registerUserFormFragment.appendChild(registerUserEmailField)
        registerUserFormFragment.appendChild(registerUserButton)

        let registerUserArticleOutput = document.querySelector("output_registeruserarticle")

        registerUserArticleOutput.appendChild(registerUserFormFragment)
    },

    handleRegisterUser(event) {
        console.log("hi")
        let registeredUser = {
            name: registerUserNameInput.value,
            email: registerUserEmailInput.value
    }
    console.log(registeredUser)

    runsCollection.putRegisterUser(userObjectToRegister, registeredUser)
    .then(response => {
        console.log(response)
    })
}
}

export default registerUserForm;
