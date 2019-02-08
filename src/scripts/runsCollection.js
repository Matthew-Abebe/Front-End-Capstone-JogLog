const runsCollection = {
/*The method getAllRuns makes a fetch call to the API and receives the object Runs from the API. The .then parses the data recieved from the database.json and gives it to javascript as an array of data.*/
    getAllRuns() {
        return fetch("http://localhost:8088/Runs")
        .then(response => response.json())
    },

/*The method postNewRun(newRunToSave) adds the object newRun via the argument (newRunToSave) and posts it to the database. The fetch pings the API and saves the new record to the Run table in the database. JSON.stringify converts the argument newRunToSave to a string for the JSON server database in order to have it in the proper format.*/
    postNewRun(newRunToSave) {
        return fetch("http://localhost:8088/Runs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRunToSave)
        })
    },
/*The method getRun(runId) allows you to get an individual object based on the Id from the Run object in the database. The fetch call communicates with the API, which has specified to communicate with the runId.*/
    getRun(runId) {
        return fetch(`http://localhost:8088/Runs/${runId}`)
        .then(response => response.json())
    },

/*The method deleteRun(runId) allows you to delete run objects by targeting the runId which is in the return value of the deleteRun method. The fetch call communicates with the API, specifically the runId. The promise additionally calls for a "DELETE" method. Once the promise in the deleteRun method is fulfilled, the targeted run object will be deleted.*/
    deleteRun(runId) {
        return fetch(`http://localhost:8088/Runs/${runId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

    putUpdateRun(runId, runToEdit) {
        return fetch(`http://localhost:8088/Runs/${runId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(runToEdit)
        })
    }
}

/*The object runsCollection is exported and it is made available in other modules*/
export default runsCollection;