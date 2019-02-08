import runsCollection from "./runsCollection";
import runsList from "./runsList";

const runsEditForm = {
    editRunAndAppendForm(runObjectToEdit) {
        let editRunDateField = document.createElement("h2")

        let editRunDateLabel = document.createElement("label")
        editRunDateLabel.textContent = "Date"
        let editRunDateInput = document.createElement("input")
        editRunDateInput.value = runObjectToEdit.date

        editRunDateField.appendChild(editRunDateLabel)
        editRunDateField.appendChild(editRunDateInput)

        let editRunTypeField = document.createElement("h2")

        let editRunTypeLabel = document.createElement("label")
        editRunTypeLabel.textContent = "Type"
        let editRunTypeInput = document.createElement("input")
        editRunTypeInput.value = runObjectToEdit.type

        editRunTypeField.appendChild(editRunTypeLabel)
        editRunTypeField.appendChild(editRunTypeInput)

        let editRunDistanceField = document.createElement("h2")

        let editRunDistanceLabel = document.createElement("label")
        editRunDistanceLabel.textContent = "Distance"
        let editRunDistanceInput = document.createElement("input")
        editRunDistanceInput.value = runObjectToEdit.distance

        editRunDistanceField.appendChild(editRunDistanceLabel)
        editRunDistanceField.appendChild(editRunDistanceInput)

        let updateRunButton = document.createElement("button")
        updateRunButton.textContent = "Update"
        updateRunButton.addEventListener("click", () => {
            let editedRun = {
                date: editRunDateInput.value,
                type: editRunTypeInput.value,
                distance: editRunDistanceInput.value
        }

            runsCollection.putUpdateRun(runObjectToEdit.id, editedRun)
            .then(response => {
                console.log(response)
                runsList.jogLogify()
            })
        })

        let editRunFormFragment = document.createDocumentFragment()

        editRunFormFragment.appendChild(editRunDateField)
        editRunFormFragment.appendChild(editRunTypeField)
        editRunFormFragment.appendChild(editRunDistanceField)
        editRunFormFragment.appendChild(updateRunButton)

        let editRunArticleOutput = document.querySelector(".output_editrunsarticle")

        while (editRunArticleOutput.firstChild) {
            editRunArticleOutput.removeChild(editRunArticleOutput.firstChild);
        }

        editRunArticleOutput.appendChild(editRunFormFragment)
    }
}

    export default runsEditForm