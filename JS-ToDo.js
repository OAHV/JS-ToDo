var ToDoList = [];      // List to put ToDo items in
var delayTime = 1000;   // How long time to show the messages

// Add an item from the input field 'addedToDo' to the list
function addToDo(){
    // Get the item from the field
    var ToDo = document.getElementById("addedToDo").value;
    if(ToDo == ""){
        // If empty: Display message (for a short time)
        document.getElementById("notadded").style.display = "initial";
        setTimeout(() => {  document.getElementById("notadded").style.display = "none"; }, delayTime);
        // Set focus to the input field again (facilitate for the user)
        document.getElementById("addedToDo").focus();
    } else {
        // Display status message (for a short time)
        document.getElementById("added").style.display = "initial";
        setTimeout(() => {  document.getElementById("added").style.display = "none"; }, delayTime);
        // Reset input field
        document.getElementById("addedToDo").value = "";
        // Push the value to the list
        ToDoList.push(ToDo);
        // Display the list (with no search value)
        displayToDoList("");
        // Set focus to the input field again (facilitate for the user)
        document.getElementById("addedToDo").focus();
    }    
}

// Display the list (filtered by search)
function displayToDoList(search) {
    var ihtml = ""; // Initialise empty string
    // For each item in the list
    for(i=0;i<ToDoList.length;i++){
        // If no search or the search matches
        if(search == "" || ToDoList[i].includes(search)) {
            // Add all the items to the string
            ihtml += "<div class=\"ToDoItem\"><p>"
            + ToDoList[i] 
            + "</p><button onclick=\"delToDo("
            + i + ")\" class=\"del\"><p>x</p></button></div>";
        }
    }
    // Update the div for the string
    document.getElementById("list").innerHTML = ihtml;
}

// Delete one item from the list (x-button clicked on item)
function delToDo(i) {
    ToDoList.splice(i,1);       // Remove from list
    searchToDo();               // Update the filtered list on screen
    // Set focus to the input search field
    document.getElementById("sbutton").focus();
}

// Clear list when button pressed
function clearList() {
    ToDoList = [];          // Clear list
    displayToDoList("");    // Display (empty) list
    // Display message (for a short time)
    document.getElementById("cleared").style.display = "initial";
    setTimeout(() => {  document.getElementById("cleared").style.display = "none"; }, delayTime);
    // Set focus to the add item field on screen
    document.getElementById("addedToDo").focus();
}

// Search for an item according to the search field contents
function searchToDo() {
    // Each time a letter is typed or deleted - update the filtered list on screen
    var inp = document.getElementById("sbutton").value;
    displayToDoList(inp);
}

// Clear the search field when not in focus any more
function clearSearch() {
    document.getElementById("sbutton").value = "";
    displayToDoList("");
}

/* By Ole Victor */