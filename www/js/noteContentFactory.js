angular.module('noteContentFactory', [])
.factory("noteContentFactory", [function () {

  var noteContent = '';

  // var testNotes = {
  //   "untitled1": {
  //     title: "Untitled 1",
  //     content: "sample content"
  //   },
  //   "untitled2": {
  //     title: "Untitled 2",
  //     content: "sample content 2"
  //   }
  // }

  // localStorage.setItem("notes", JSON.stringify(testNotes));

  var getAllNotes = function() {
    return JSON.parse(localStorage.getItem("notes" || {}));

  }

  var notes = getAllNotes()
  console.log("notes from factory:", notes);


  return {
    addContent: function(content) {
      noteContent = content;
      console.log("noteContent in Factory:", noteContent);
      return noteContent;
    },
    getContent: function() {
      console.log("noteContent in Factory:", noteContent);
      return noteContent;
    },
    getAllNotes: function() {
      return notes;
    },
    getNote: function(uniqueKey) {
      return notes[uniqueKey];
    },
    updateNote: function(uniqueKey, updatedNoteObj) {
      notes[uniqueKey] = updatedNoteObj;
      localStorage.setItem("notes", JSON.stringify(notes));

    }

  };

}]);//end of factory
