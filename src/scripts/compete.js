const competitionsForm = {
    getAndAppendCompetitions() {

let competeHeader = document.createElement("h2")
competeHeader.textContent = "JogLog - Compete"

let competeDateField = document.createElement("fieldset")

let competeDateLabel = document.createElement("label")
competeDateLabel.textContent = "Date"
competeDateLabel.setAttribute("for", "compete_date")
let competeDateInput = document.createElement("input")
competeDateInput.setAttribute("id", "compete_date")
competeDateInput.setAttribute("name", "compete_date")

competeDateField.appendChild(competeDateLabel)
competeDateField.appendChild(competeDateInput)

let competeNameField = document.createElement("fieldset")

let competeNameLabel = document.createElement("label")
competeNameLabel.textContent = "Name"
competeNameLabel.setAttribute("for", "compete_Name")
let competeNameInput = document.createElement("input")
competeNameInput.setAttribute("id", "compete_Name")
competeNameInput.setAttribute("name", "compete_Name")

competeNameField.appendChild(competeNameLabel)
competeNameField.appendChild(competeNameInput)

let competeLocationField = document.createElement("fieldset")

let competeLocationLabel = document.createElement("label")
competeLocationLabel.textContent = "Location"
competeLocationLabel.setAttribute("for", "compete_location")
let competeLocationInput = document.createElement("input")
competeLocationInput.setAttribute("id", "compete_location")
competeLocationInput.setAttribute("name", "compete_location")

competeLocationField.appendChild(competeLocationLabel)
competeLocationField.appendChild(competeLocationInput)

let competeEventDistanceField = document.createElement("fieldset")

let competeEventDistanceLabel = document.createElement("label")
competeEventDistanceLabel.textContent = "Event Distance"
competeEventDistanceLabel.setAttribute("for", "compete_eventdistance")
let competeEventDistanceInput = document.createElement("input")
competeEventDistanceInput.setAttribute("id", "compete_eventdistance")
competeEventDistanceInput.setAttribute("name", "compete_eventdistance")

competeEventDistanceField.appendChild(competeEventDistanceLabel)
competeEventDistanceField.appendChild(competeEventDistanceInput)

let saveCompetitionButton = document.createElement("button")
saveCompetitionButton.textContent = "Save"
saveCompetitionButton.setAttribute("class", "savecompetition_button")

let competitionFormFragment = document.createDocumentFragment()
competitionFormFragment.appendChild(competeHeader)
competitionFormFragment.appendChild(competeDateField)
competitionFormFragment.appendChild(competeNameField)
competitionFormFragment.appendChild(competeLocationField)
competitionFormFragment.appendChild(competeEventDistanceField)
competitionFormFragment.appendChild(saveCompetitionButton)

let competitionFormArticle = document.querySelector(".output_competitionsform")
competitionFormArticle.appendChild(competitionFormFragment)
    },

}

export default competitionsForm;


