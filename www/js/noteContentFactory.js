angular.module('noteContentFactory', [])
.factory("noteContentFactory", [function () {

  //gets all notes from local storage. If no notes exists, returns empty object:

  var getNotesObj = function() {
    return JSON.parse(localStorage.getItem("notes")) || {};
  console.log("notes:", notes);
  }

  var notes = getNotesObj();

  return {
    getAllNotes: function() {
      return notes;
    },
    getNote: function(uniqueKey) {
      notes = getNotesObj();
      return notes[uniqueKey];
    },
    updateNote: function(uniqueKey, updatedNoteObj) {
      notes[uniqueKey] = updatedNoteObj;
      localStorage.setItem("notes", JSON.stringify(notes));
    },
    setNotes: function(reducedNotesObj) {
      notes = reducedNotesObj;
      console.log("notes reduced:", notes);
      localStorage.setItem("notes", JSON.stringify(notes));
      notes = getNotesObj();
      console.log("newNotesObj from local storage:", notes);

    }

  };

}]);//end of factory
