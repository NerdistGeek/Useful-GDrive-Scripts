//Created By NerdistGeek (03/08/2020)
//This file is for Google Script (.gs)
//If you were to use this please simply copy the code into Google Scipt editor and add certain information where prompted
//If you want this to work on multiple other files then copy the subReddit1() Function and replace the parent folder ID and function name



function createFolder(folderID, folderName){
  var parentFolder = DriveApp.getFolderById(folderID); //Varible called parentFolder which is the ID of folder which the code will create the files in
  var subFolders = parentFolder.getFolders(); //Varible called subFolders which is the folders inside the parentFolder
  var doesntExists = true; //Varible called doesntExists with the default setting of TRUE
  var newFolder = '';
  
  // Check if folder already exists.
  while(subFolders.hasNext()){
    var folder = subFolders.next(); //This holds the subfolder when being checked
    
    //If the name exists return the id of the folder
    if(folder.getName() === folderName){
      doesntExists = false;
      newFolder = folder;
      return newFolder.getId();
    };
  };

  //If the name doesn't exists, then create a new folder
  if(doesntExists = true){
    newFolder = parentFolder.createFolder(folderName);
    return newFolder.getId();
  };
};

function subReddit1(){ 
  var date = new Date(); //Creates varible called date that contains the current date
  var mt = date.getMonth(); //Varible called mt that grabs the month
  //Varible named months called contains an array of month names
  var months = ["(01) January", "(02) February", "(03) March", "(04) April", "(05) May", "(06) June", "(07) July", "(08) August", "(09) September", "(10) October", "(11) November", "(12) December"];
  var currentD = months[mt]; //Varible called currentD which grabs the name from the array which matches the current month 
  
  var FOLDER_ID = 'ADD THE PARENT FOLDER ID HERE!!!!!!!'; //Varible that contains the parent ID
  var myFolderID = createFolder(FOLDER_ID, currentD); //Varible that contains the newly created folder ID

  Logger.log(myFolderID); //Logs the ID in the console
  
  var source_folder = DriveApp.getFolderById(FOLDER_ID); //Varible that contains the source folder
  var dest_folder = DriveApp.getFolderById(myFolderID); //Varible that contains the destination folder
  var files = source_folder.getFiles(); //This varible grabs the files that are contained in the source folder

  //While there are files in the source folder it will add them to the destination folder and remove them from the original folder
  while (files.hasNext()) {
    var file = files.next();
    dest_folder.addFile(file);
    source_folder.removeFile(file);
  
  };
};