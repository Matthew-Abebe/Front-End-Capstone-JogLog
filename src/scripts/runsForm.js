import runsCollection from "./runsCollection"
import runsList from "./runsList";

const runLogsForm = {
    /*The following code builds the forms that will contain input fields that allows a user to enter the details of a new run. It also includes a button at the end of the form which when clicked will save a new run. First an object is declared and contains a method called getAndAppendRunsLog(). The forms are built by creating fieldset elements. After that the label and input for a particular detail of the run is made. The label and input is then appended to the fieldset. This process is repeated until the necessary amount of fieldsets are made. Once this is done the log! button is made with an event listener added. Then a document fragment, runFormFragment, is created and the aformentioned fieldsets, along with the log! button, are appended to the runFormFragment. Then a new variable called runFormArticle is made and it gets a reference to an element with the class, (".output_runlogsform") by using document.QuerySelector(). The document fragment containing all the fieldsets is then appended to runFormArticle, which appends the fieldsets to the DOM.*/
    getAndAppendRunLogs() {

let runHeader = document.createElement("h2")
runHeader.textContent = "JogLog - Runs"

let runDateField = document.createElement("fieldset")

let runDateLabel = document.createElement("label")
runDateLabel.textContent = "Date"
runDateLabel.setAttribute("for", "run_date")
let runDateInput = document.createElement("input")
runDateInput.setAttribute("id", "run_date")
runDateInput.setAttribute("name", "run_date")

runDateField.appendChild(runDateLabel)
runDateField.appendChild(runDateInput)

let runTypeField = document.createElement("fieldset")

let runTypeLabel = document.createElement("label")
runTypeLabel.textContent = "Type"
runTypeLabel.setAttribute("for", "run_type")
let runTypeInput = document.createElement("input")
runTypeInput.setAttribute("id", "run_type")
runTypeInput.setAttribute("name", "run_type")

runTypeField.appendChild(runTypeLabel)
runTypeField.appendChild(runTypeInput)

let runDistanceField = document.createElement("fieldset")

let runDistanceLabel = document.createElement("label")
runDistanceLabel.textContent = "Distance"
runDistanceLabel.setAttribute("for", "run_distance")
let runDistanceInput = document.createElement("input")
runDistanceInput.setAttribute("id", "run_distance")
runDistanceInput.setAttribute("name", "run_distance")

runDistanceField.appendChild(runDistanceLabel)
runDistanceField.appendChild(runDistanceInput)

let jogLogButton = document.createElement("button")
jogLogButton.textContent = "Log!"
jogLogButton.setAttribute("class", "jogLog_button")

jogLogButton.addEventListener("click", this.handleNewRun)

let runFormFragment = document.createDocumentFragment()
runFormFragment.appendChild(runHeader)
runFormFragment.appendChild(runDateField)
runFormFragment.appendChild(runTypeField)
runFormFragment.appendChild(runDistanceField)
runFormFragment.appendChild(jogLogButton)

let runFormArticle = document.querySelector(".output_runlogsform")
// console.log(runFormArticle)
runFormArticle.appendChild(runFormFragment)
    },

    /*The following function called handleNewRun(event) is executed once the log! button is clicked. The function contains three variables that reference elements with the necessary classes to receive the relevant values from the inputs contained in the fieldsets from the method above. Then an object called newRun is built using the received data from the input variables. Finally the method postNewRun() is called and newRun is passed to it as an argument, postNewRun(newRun).Data from the object newRun is posted to the database.json. Then runsList.jogLogify() is called and a fresh version of the database is posted. */

    handleNewRun(event) {
        let inputRunDate = document.querySelector("#run_date").value
        let inputRunType = document.querySelector("#run_type").value
        let inputRunDistance = document.querySelector("#run_distance").value

        let newRun = {
            date: inputRunDate,
            type: inputRunType,
            distance: inputRunDistance
        }

        runsCollection.postNewRun(newRun)
        .then(response => {
            console.log(response)
            runsList.jogLogify()
        })
    }

}

/*runLogsForm is exported and made available to other modules*/
export default runLogsForm;




