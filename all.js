//This is to setup backend login info it's being referenced in signupform.html
// var config = {
//    apiKey: "<API_KEY>",
//    authDomain: "leftmeeting.firebaseapp.com",
//    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//    projectId: "leftmeeting",
//    storageBucket: "<BUCKET>.appspot.com",
//    messagingSenderId: "<SENDER_ID>",
//  };
//  firebase.initializeApp(config);

function signUp(){
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var firstName = document.getElementById("first").value;
  var organ = document.getElementById("affiliation").value;
  var user = [{
    UserName:  userName,
    Email: email,
    First: firstName,
    Organization: organ
  }];
  for (i = 0; i < user.length; i++)
  var newUser = user[i];
  document.getElementById("signed").innerText = "Hello " + firstName + " you have created an account as " + userName + " with " + organ + ", if this isn't you, please log out";
 console.log(user);}

//For Logging In

// var logName = document.getElementById("loggingName").value;
// var logEmail = document.getElementById("loggingEmail").value;


function logIn(){
  var logUser = [{
    UserName: document.getElementById("loggingName").value,
    Email: document.getElementById("loggingEmail").value,
  }];
  for (i = 0; i < logUser.length; i++)
  var newLogUser = logUser[i];
  document.getElementById("logged").innerText = "Hello " + newUser.First + " you have signed in as " + UserName + " with " + newUser.Organization + ", if this isn't you, please log out";
 console.log(user);}

//For Starting a Meet

function startMeet(){
  var when = document.getElementById("when").value ;
  var where = document.getElementById("where").value;
  var host = document.getElementById("host").value;
  var why = document.getElementById("why").value;
  var who = document.getElementById("who").value;
  var expect = document.getElementById("expect").value;
  var meetUp = [{
  When: when,
  Where: where,
  Host: host,
  Why: why,
  Who: who,
  Expectations: expect
  }];
  for (i = 0; i < meetUp.length; i++)
  var newMeet = meetUp[i];
  document.getElementById("descript").innerHTML = "You have just created a meet, you can expect to see it in the public forum. Thanks for adding to the community!";
  document.getElementById("created").innerText = host + " has just created a meet for " + when + " at " + where + " to " + why + " you can expect " + expect + ", and " + who + " to be there.";
 console.log(meetUp);}

 function finding(){
   var searchName = document.getElementById("searchName").value;
   var searchEmail = document.getElementById("searchEmail").value;
   var searchFirst = document.getElementById("searchFirst").value;
   var searchOrgan = document.getElementById("searchAffiliation").value;
   var searchMeet = [{
     UserName:  searchName,
     Email: searchEmail,
     First: searchFirst,
     Organization: searchOrgan
   }];
   for (i = 0; i < searchMeet.length; i++)
   var newSearch = searchMeet[i];
   document.getElementById("searching").innerText = "Hello, there are meets by " + searchName + " and some by " + searchOrgan + " you can contact them by emailing " + searchEmail;
 }
