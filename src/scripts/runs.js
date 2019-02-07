import runsCollection from "./runsCollection";
import runsList from "./runsList";

/*The object const runs contains a method called runsBuilder. The method runsBuilder contains a promise called runsObject. Once the method runsBuilder is called the HTML for everything appended to the variable runsArticleOutput, which references the class ".output_runsarticle", is appended to the DOM. The elements appended to runsArticleOutput are first appended to an article element called runsArticle. The elements appended to runsArticle include five variables. Three of these variables are h2 elements in order to append the relevant run details. The last two are an edit and delete button. Once these five elements are appended to runsArticle, runsArticle is then appended to runsArticleOutput which references the class ".output_runsarticle" which appends the h2s and buttons to the DOM.*/
    const runs = {
    runsBuilder(runsObject) {
        console.log(runsObject)
        let runsArticleOutput = document.querySelector(".output_runsarticle")
        let runsArticle = document.createElement("article")
        runsArticle.setAttribute("Id", `runs--${runsObject.id}`)

        let runDates = document.createElement("h2")
        runDates.textContent = runsObject.date
        let runTypes = document.createElement("h2")
        runTypes.textContent = runsObject.type
        let runDistances = document.createElement("h2")
        runDistances.textContent = runsObject.distance

        let editRunButton = document.createElement("button")
        editRunButton.textContent = "Edit"
        editRunButton.addEventListener("click", () => {
            let runArticleId = event.target.parentNode.id
            let runId = runArticleId.split("--")[1]
            runsCollection.getRun(runId)
            .then(response => {
                console.log(response)
            })
        })

        let deleteRunButton = document.createElement("button")
        deleteRunButton.textContent = "Delete"
        deleteRunButton.addEventListener("click", () => {
            let runArticleId = event.target.parentNode.id
            let runId = runArticleId.split("--")[1]
            runsCollection.deleteRun(runId)
            .then(response => {
                runsList.jogLogify()
                console.log(response)
            })
        })

        runsArticle.appendChild(runDates)
        runsArticle.appendChild(runTypes)
        runsArticle.appendChild(runDistances)
        runsArticle.appendChild(editRunButton)
        runsArticle.appendChild(deleteRunButton)

        runsArticleOutput.appendChild(runsArticle)
        }
    }

export default runs