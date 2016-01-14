angular.module('noteContentFactory', [])
.factory("noteContentFactory", [function () {

  var noteContent = '';

  return {
    addContent: function(content) {
      noteContent = content;
      console.log("noteContent in Factory:", noteContent);
      return noteContent;
    },
    getContent: function() {
      console.log("noteContent in Factory:", noteContent);
      return noteContent;
    }
  };

}]);//end of factory
