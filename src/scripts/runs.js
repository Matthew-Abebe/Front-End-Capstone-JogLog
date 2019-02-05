const runLogsForm = {
    getAndAppendRunLogs() {

let runHeader = document.createElement("h2")
runHeader.textContent = "Runs"

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

let runFormFragment = document.createDocumentFragment()
runFormFragment.appendChild(runHeader)
runFormFragment.appendChild(runDateField)
runFormFragment.appendChild(runTypeField)
runFormFragment.appendChild(runDistanceField)
runFormFragment.appendChild(jogLogButton)

let runFormArticle = document.querySelector(".output_runlogsform")
console.log(runFormArticle)
runFormArticle.appendChild(runFormFragment)
    },

}

export default runLogsForm;


