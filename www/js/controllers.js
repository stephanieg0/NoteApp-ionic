angular.module('starter.controllers', ["noteContentFactory"])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/noteList.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('noteListCtrl', function($scope, noteContentFactory) {
  var newContent = noteContentFactory.getContent();


  //console.log("newContent", newContent);

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

  $scope.noteListObject = noteContentFactory.getAllNotes();
  console.log("$scope.noteListObject", $scope.noteListObject);

  $scope.addNote = function() {
    console.log("you clicked on add note!");
    console.log("uuid.v1:", uuid.v1());
    var uniqueId = uuid.v1();
    $scope.noteListObject[uniqueId] =
    {
      title: "Untitled",
      content: "test content"
    }

    //creates new note object in local storage:
    localStorage.setItem("notes", JSON.stringify($scope.noteListObject));

  };

})

.controller('noteCtrl', function($scope, $stateParams, noteContentFactory) {
  var uniqueNoteId = $stateParams.noteListid;
  $scope.note = noteContentFactory.getNote($stateParams.noteListid);
  console.log("$scope.note", $scope.note);


  $scope.noteText = $scope.note.content;

  // $scope.saveContent = function() {
  //   console.log("content changed!");
  //   console.log("note content:", $scope.noteText);
  // }


  $scope.$watch('noteText', function() {
    console.log("content changed!");
    console.log("noteText:", $scope.noteText);
    $scope.note.content = $scope.noteText;
    console.log("updated note object:", $scope.note);
    noteContentFactory.updateNote(uniqueNoteId, $scope.note);
  }, true)

  // $scope.$watch('testTextArea', function() {
  //   console.log("test text area changed");
  // }, true)

  // $scope.SaveNoteContent = function (noteText) {
  //   $scope.note.content = noteText;
  //   console.log("updated note object:", $scope.note);
  //   noteContentFactory.updateNote(uniqueNoteId, $scope.note);

  // }


  // $scope.SaveNote = function (noteText) {
  //   var noteInput = noteText;

  //   console.log("noteInput", noteInput);
  //   console.log("button works");


  //   //setting the local storage with history object.
  //   // localStorage.setItem('tempNote', JSON.stringify(testNotes));

  //   noteContentFactory.addContent(noteInput);

  // }



});
