    const runs = {
    runsBuilder(runsObject) {
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
        // editRunButton.addEventListener("click", () => {
        //     let runArticleId = runsObject.id

        let deleteRunButton = document.createElement("button")
        deleteRunButton.textContent = "Delete"

        runsArticle.appendChild(runDates)
        runsArticle.appendChild(runTypes)
        runsArticle.appendChild(runDates)
        runsArticle.appendChild(editRunButton)
        runsArticle.appendChild(deleteRunButton)

        runsArticleOutput.appendChild(runsArticle)

    },
}

export default runs