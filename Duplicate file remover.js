//Functions that compares a file to the other files in the folder
function findEntry(arr, name, size) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i][0] === name && arr[i][1] === size) return true;
  }
  return false;
}

//Function that compares the files name and size which if it matches, the code will delete the newest file
function delDup() {
  var folder = DriveApp.getFolderById("PARANT FOLDER ID HERE") //Parant folder ID
  var files = folder.getFiles(), //Varible that grabs all the files in the parant folder
      list = []; //Creates an array called list
  
  //While loop that runs through the files, compares them all and if it matches, will delete the file
  while (files.hasNext()) {
    var file = files.next(),
        name = file.getName(), //adds name of files to the array called name 
        size = file.getSize(); //adds size of files to the array called size
    
    //if the name of file ends with a certain file extension and matches another file in the arrays then add to the trash
    //else push it to the array and move on to the next file
    if(name.endsWith(".jpg") || name.endsWith(".jpeg") || name.endsWith(".png") || name.endsWith(".gif")) {
      if(findEntry(list, name, size)) {
        file.setTrashed(true);
      } else {
        list.push([name, size]);
      }
    }
  }
}