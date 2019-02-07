/*Here are the import statements that are calling the objects in which the functions from other modules you want to call in this module are housed*/

import runsCollection from "./runsCollection";
import runs from "./runs"

/*The first step is to get data from your API. This is done by using the getAllRuns("runs") promise. This method is housed within a function, jogLogify() {}, that is initially called within the object const runsList = {}. allRuns, which is an array of objects collected from runsCollection, is then set as a promise for the method. runsItem is passed into the promise for the allRuns forEach loop. allRuns draws each run object from the database individually using a for each loop function. Once the object from the array is received it is passed to the runsBuilder function which appends each object to the DOM one at a time. ???A while loop is necessary because it removes the first child sequentially until the DOM is cleared.*/

const runsList = {
    jogLogify() {
        runsCollection.getAllRuns("runs").then(allRuns => {
            console.log(allRuns)

            allRuns.forEach(runsItem => {
                runs.runsBuilder(runsItem);

            });
        })
        let runsOutputArticle = document.querySelector(".output_runsarticle")

        while (runsOutputArticle.firstChild) {
        runsOutputArticle.removeChild(runsOutputArticle.firstChild);
        }
    }
}

/*This code makes the object runsList available to be imported in other modules, meaning it can be exported.*/
export default runsList

