//Funtion thats creates a google trigger
function createTimeDrivenTriggers() {
  ScriptApp.newTrigger('emptyTrash') //Trigger name
      .timeBased() //Time based trigger
      .everyHours(1) //Runs every hour
      .create(); //creates the trigger
}

//Functiion that empties the users trash
function emptyTrash(){
  Drive.Files.emptyTrash();
}