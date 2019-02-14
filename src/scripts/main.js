/*The main.js page acts as a launching point for the application. In the file there are import statements and function calls. The reason that these pieces of code are important is that they allow functions written in one module to be functional throughout the application. This is done with two steps. First you import the object that the function is housed in. Second, you call the function with dot notation.*/

/*Here are the import statements that are calling the objects in which the functions you want to call is housed*/
import loginForm from "./login"
import registerForm from "./register"
import runsCollection from "./runsCollection"
import runLogsForm from "./runsForm"
import runsList from "./runsList"

/*Here are the functions being called with dot notation*/
loginForm.getAndAppendLogin();
registerForm.registerUserAndAppendForm();
runsCollection.getAllRuns();
runLogsForm.getAndAppendRunLogs();
runsList.jogLogify();




