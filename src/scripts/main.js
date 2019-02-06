import loginForm from "./login"
import registerForm from "./register"
import runsCollection from "./runsCollection"
import runLogsForm from "./runsForm"
import competitionsForm from "./compete"
import runsList from "./runsList"

loginForm.getAndAppendLogin();
registerForm.getAndAppendRegistration();
runsCollection.getAllRuns();
runLogsForm.getAndAppendRunLogs();
competitionsForm.getAndAppendCompetitions();
runsList.jogLogify();




