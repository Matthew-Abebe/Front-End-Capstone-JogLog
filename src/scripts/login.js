import runsCollection from "./runsCollection"

//put in an object and export as a method import into main.js and call it//
const loginForm = {
    getAndAppendLogin() {

        let loginHeader = document.createElement("h2")
        loginHeader.textContent = "JogLog - Login"

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

        let loginButton = document.createElement("button")
        loginButton.textContent = "Login"
        loginButton.setAttribute("class", "login_button")
        loginButton.addEventListener("click", this.handleLoginUser)

        let loginFormFragment = document.createDocumentFragment()
        loginFormFragment.appendChild(loginHeader)
        loginFormFragment.appendChild(loginUserNameField)
        loginFormFragment.appendChild(loginUserEmailField)
        loginFormFragment.appendChild(loginButton)

        let loginFormArticle = document.querySelector(".output_loginform")
        loginFormArticle.appendChild(loginFormFragment)
    },

    handleLoginUser(event) {
        console.log(event)
        let loginUserName = document.querySelector("#user_name").value
        let loginUserEmail = document.querySelector("#user_email").value

        let loginUser = {
            name: loginUserName,
            email: loginUserEmail
        }



        runsCollection.getAllUsers()
            .then(Users => {
                let findUser = 1
                Users.forEach(User => {
                    if (loginUser.name === User.name && loginUser.email === User.email) {
                    alert("Welcome" + " " + User.name)
                    }
                    else if
                    (findUser === Users.length) {
                        alert("User not found.")
                    }

                    else {
                        findUser++

                    }})})
    }}
                    export default loginForm;
