var config = {
  apiKey: "AIzaSyCodroWkXO7cCJSHjFPxM1Fr7SxXqf42XE",
  authDomain: "trains-4fe2b.firebaseapp.com",
  databaseURL: "https://trains-4fe2b.firebaseio.com",
  projectId: "trains-4fe2b",
  storageBucket: "",
  messagingSenderId: "189435478139",
};

firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;

$("#add-train").on("click", function() {
  event.preventDefault();

  trainName = $("#train-name")
    .val()
    .trim();
  destination = $("#destination")
    .val()
    .trim();
  firstTrain = $("#first-train")
    .val()
    .trim();
  frequency = $("#train-frequency")
    .val()
    .trim();

  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  database.ref().push({
    train: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
  });
});

database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val().train);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().firstTrain);
  console.log(snapshot.val().frequency);

  var a = $("<tr>");
  a.append("<td>" + snapshot.val().train + "</td>");
  a.append("<td>" + snapshot.val().destination + "</td>");
  a.append("<td>" + snapshot.val().firstTrain + "</td>");
  a.append("<td>" + snapshot.val().frequency + "</td>");

  $("tbody").append(a);
});
