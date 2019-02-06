import runsCollection from "./runsCollection";
import runs from "./runs"

const runsList = {
    jogLogify() {
        runsCollection.getAllRuns("runs").then(allRuns => {
            console.log(allRuns)

            allRuns.forEach(runsItem => {
                runs.runsBuilder(runsItem);

            });
        })
    }
}

export default runsList

