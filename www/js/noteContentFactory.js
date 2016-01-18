angular.module('noteContentFactory', [])
.factory("noteContentFactory", [function () {

  //gets all notes from local storage. If no notes exists, returns empty object:
  var getNotesObj = function() {
    return JSON.parse(localStorage.getItem("notes")) || {};

  }

  var notes = getNotesObj();

  return {
    getAllNotes: function() {
      notes = getNotesObj();
      return notes;
    },
    getNote: function(uniqueKey) {
      notes = getNotesObj();
      return notes[uniqueKey];
    },
    updateNote: function(uniqueKey, updatedNoteObj) {
      notes[uniqueKey] = updatedNoteObj;
      localStorage.setItem("notes", JSON.stringify(notes));
      notes = getNotesObj();
      console.log("local storage with new title:", notes);
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
