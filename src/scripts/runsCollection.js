const runsCollection = {
/*The method getAllRuns makes a fetch call to the API and receives the object Runs from the API. The .then parses the data recieved from the database.json and gives it to javascript as an array of data.*/
    getAllRuns() {
        return fetch("http://localhost:8088/Runs")
        .then(response => response.json())
    },

/*The method postNewRun(newRunToSave) adds the object newRun via the argument (newRunToSave) and posts it to the database.*/
    postNewRun(newRunToSave) {
        return fetch("http://localhost:8088/Runs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRunToSave)
        }).then(response => response.json())
    },
/*The method getRun(runId) allows you to get the Id from the Run object in the database.*/
    getRun(runId) {
        return fetch(`http://localhost:8088/Runs/${runId}`)
        .then(response => response.json())
    },

}

/*The object runsCollection is exported and it is made available in other modules*/
export default runsCollection;