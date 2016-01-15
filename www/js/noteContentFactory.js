angular.module('noteContentFactory', [])
.factory("noteContentFactory", [function () {

  var noteContent = '';

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
    }

  };

}]);//end of factory
