
// MODEL 
// initialize the array
let notesObj = [];

// Function to delete a note
function deleteNote(index) {
  getLocalNotes();
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Function to add a note and save it to the localStorage
function addNoteObject() {
  //let addBtn = document.getElementById("addBtn");
  //addBtn.addEventListener("click", function() {
    const addTxt = document.getElementById("addTxt");
    const addTxtValue = addTxt.value;
    const addTopic = document.getElementById("noteTopic");
    const addTopicValue = addTopic.value;
    
    getLocalNotes();
    
    notesObj.push({
      topic: addTopicValue,
      noteText: addTxtValue,
    });
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTopic.value = "";
    showNotes();
  };

// VIEW
// Function to render the screen and display notes
function showNotes() {
  getLocalNotes();
  let html = "";
  notesObj.forEach(function(note, index) {
    let theTopic = note.topic;
    let theNote = note.noteText;
    let noteIndex = index;
    console.log(noteIndex);
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${theTopic}</h5>
                        <p class="card-text"> ${theNote}</p>
                        <button id="${noteIndex}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Create your first Note!`;
  }
}

//CONTROLLER
// Function to get local notes from storage
function getLocalNotes() {
  let notes = localStorage.getItem("notes");
    if (notes == null) {
      let notesObj = [{
        topic: '',
        noteText: '',
       }];
    } else {
      notesObj = JSON.parse(notes);
   }
  
  };


showNotes();






