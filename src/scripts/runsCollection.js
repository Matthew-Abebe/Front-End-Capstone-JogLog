const runsCollection = {
    getAllRuns() {
        return fetch("http://localhost:8088/Runs")
        .then(response => response.json())
    },

    postNewRun(newRunToSave) {
        return fetch("http://localhost:8088/Runs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRunToSave)
        }).then(response => response.json())
    },

    getRun(runId) {
        return fetch(`http://localhost:8088/Runs/${runId}`)
        .then(response => response.json())
    },
}

export default runsCollection;