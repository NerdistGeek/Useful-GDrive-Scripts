function createTimeDrivenTriggers() {
  ScriptApp.newTrigger('emptyThrash')
      .timeBased()
      .everyHours(1)
      .create();
}

function emptyThash(){
  Drive.Files.emptyTrash();
}