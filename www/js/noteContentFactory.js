angular.module('noteContentFactory', [])
.factory("noteContentFactory", [function () {

  var noteContent = '';

  var notes = JSON.parse(localStorage.getItem("notes" || {}));
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
    }

  };

}]);//end of factory
