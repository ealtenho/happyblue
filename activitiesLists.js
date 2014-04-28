//Ideally, we would have an array of all the activities available to do in the app.
//Then, for this user, we would save an array in the user's local storage.
//When they have done the exercise, we would take it from the possible activities array and move it to the completed exercises array.
//We should also have two separate arrays if we want to split into mind and body
//This is a testing array of activities to populate the list:
var bodyExercises = ["Move : This is the move description. I am using a colon separation syntax.", "Play : This is another test of colon separation syntax.", "Explore : These exercises need both a name and a description for my logic to work."];
var mindExercises = ["Savor : Go to the dining hall and find the best food or dessert there. Eat it slowly, realizing how much you appreciate every bite.", "Sleep : Take a power nap for twenty minutes to refresh yourself.", "Learn : Google positive psychology to learn more about improving your happiness."];

//Since I was writing code to fill an unordered list, I realized that was very similar to the array that would be needed for the journalpage
//So I made this one too
var journalArray = [["3/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/15/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/16/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/25/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/19/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/20/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"]];

//Initial completed array
var completedArray = ["First", "Second"];

var journalArrayInitial = ["No entries yet! | Complete a reflection to see your thoughts recorded here. | Complete an exercise to see a record of it here. | Write a journal entry to see a record of it here."];

//The first time the user opens the app, they will have no array in local storage. Put the arrays in local storage.
if(localStorage.getItem("bodyExercises") == null)
{
  localStorage.setItem("bodyExercises", JSON.stringify(bodyExercises));
}

if(localStorage.getItem("mindExercises") == null)
{
  localStorage.setItem("mindExercises", JSON.stringify(mindExercises));
}

//Make an array to save the user's completed exercises
if(localStorage.getItem("completedExercises") == null)
{
  localStorage.setItem("completedExercises", JSON.stringify(completedArray));
}

//Make an array to save the user's completed exercises
if(localStorage.getItem("journalDetails") == null)
{
  localStorage.setItem("journalDetails", JSON.stringify(journalArrayInitial));
}

//On our pages that have lists I have set up empty divs
//This javascript fills those divs with the appropriate lists
function makeLists()
{
      fillList("mindExercisesFill", JSON.parse(localStorage.getItem("mindExercises")), "activity");
      fillList("bodyExercisesFill", JSON.parse(localStorage.getItem("bodyExercises")), "activity");
      var journalDates = new Array();
      for(var i = 0; i < journalArray.length; i++)
      {
        journalDates.push(journalArray[i][0]);
      }

      fillJournal("journalEntriesFill", JSON.parse(localStorage.getItem("journalDetails")), "journalEntry");
}
//Fill a ul with a list of activities
function fillList(divName, arr, link)
{
  var div = $("#" + divName);
  console.log("List to fill #" + divName);
  var current = arr[0];

  div.empty();


  for(var i = 0; i < arr.length - 1; i++)
  {
    current = arr[i];
    div.append("<li><a href=\"#\" onclick=\"javascript:exercisePage('" + arr[i] +"')\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current.split(":")[0] + "</h3></a></li>");
  }
  current = arr[arr.length - 1];
  console.log(current);
  if(current != undefined)
  {
    console.log("append");
    div.append("<li class=\" ui-last-child\"><a href=\"#\" onclick=\"javascript:exercisePage('" + arr[i] +"')\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current.split(":")[0] + "</h3></a></li>");
  }
}

function fillJournal(divName, arr, link)
{
  var div = $("#" + divName);
  console.log("List to fill #" + divName);
  var current = arr[0];

  div.empty();


  for(var i = 0; i < arr.length - 1; i++)
  {
    current = arr[i];
    div.append("<li><a href=\"#\" onclick=\"javascript:journalPage('" + arr[i] +"')\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current.split("|")[0] + "</h3></a></li>");
  }
  current = arr[arr.length - 1];
  console.log(current);
  if(current != undefined)
  {
    console.log("Parameter: " + arr[i]);
    div.append("<li class=\" ui-last-child\"><a href=\"#\" onclick=\"javascript:journalPage('" + arr[i] +"')\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current.split("|")[0] + "</h3></a></li>");
  }
}

function journalPage(journalDetail)
{
  event.preventDefault();
  //console.log(exerciseDetail);
  var journalDetails = journalDetail.split("|");
  //console.log(nameAndDescription);
  $("#journalDate").html(journalDetails[0]);
  $("#reflectionData").html(journalDetails[1]);
  $("#activityData").html(journalDetails[2]);
  $("#writingData").html(journalDetails[3]);
  $("body").pagecontainer( "change", "#journalEntry" );

}

function exercisePage(exerciseDetail)
{
  //console.log("Calling");
  event.preventDefault();
  //console.log(exerciseDetail);
  var nameAndDescription = exerciseDetail.split(":");
  //console.log(nameAndDescription);
  $("#exerciseName").html(nameAndDescription[0]);
  $("#exerciseDescription").html(nameAndDescription[1]);
  $("body").pagecontainer( "change", "#activity" );
}

//This should be the function that updates the journal when the user clicks "Done" on the exercises page
function completed()
{
  console.log("In completed");
  event.preventDefault();
  console.log($("#exerciseName").text() + ":" + $("#exerciseDescription").text());
  var currentExercise = $("#exerciseName").text() + ":" + $("#exerciseDescription").text();
  var currentBody = JSON.parse(localStorage.getItem("bodyExercises"));
  var currentMind = JSON.parse(localStorage.getItem("mindExercises"));

  //Dealing with the journal
  var currentJournal = JSON.parse(localStorage.getItem("journalDetails"));
  console.log("Current journal: " + currentJournal);
  var lastEntry = currentJournal[currentJournal.length - 1].split(":");
  var hasEntry = true;
  if(lastEntry[0] != todaysDate())
  {
    hasEntry = false;
    lastEntry = [todaysDate(), "", "", ""];
  }


  var isBody = $.inArray(currentExercise, currentBody);
  var isMind = $.inArray(currentExercise, currentMind);

  console.log(currentBody);
  console.log("index " + isBody);

  var currentCompleted = JSON.parse(localStorage.getItem("completedExercises"));
  if(isBody != -1)
  {
    var arrayUpdate = currentBody.splice(isBody, 1);

    //currentCompleted.push(arrayUpdate);
    lastEntry[2] = arrayUpdate;
    var str = "";
    for(var i = 0; i < lastEntry.length - 1; i++)
    {
      str += lastEntry[i] + " | ";
    }
    str += lastEntry[lastEntry.length - 1];

    console.log("Last entry: " + lastEntry);

    if(hasEntry || currentJournal.length == 1)
    {
      currentJournal[currentJournal.length - 1] = str;
    }
    else
    {
      currentJournal.push(str);
    }
    localStorage.setItem("journalDetails", JSON.stringify(currentJournal));

    if(currentBody.length != 0)
    {
      //alert($("#exerciseName").text() + "has been added to your journal!");
      localStorage.setItem("bodyExercises", JSON.stringify(currentBody));
      $("#text").empty();
      $("#text").html($("#exerciseName").text() + "has been added to your journal!");
      console.log("" + $("#openJournal"));
      console.log("Journal");
      $("#openJournal").popup("open");
    }
    else {
      //alert("Congratulations! You have completed all the Body exercises. We'll refresh the list so you can do them again.");
      localStorage.setItem("bodyExercises", JSON.stringify(bodyExercises));
      $("#text").empty();
      $("#text").html("Congratulations! You have completed all the Mind exercises. We'll refresh the list so you can do them again.");
      console.log("" + $("#openJournal"));
        console.log("Journal");
      $("#openJournal").popup("open");
    }


  }
  else
  {
    var arrayUpdate = currentMind.splice(isMind, 1);

    lastEntry[2] = arrayUpdate;
    var str = "";
    for(var i = 0; i < lastEntry.length - 1; i++)
    {
      str += lastEntry[i] + " | ";
    }
    str += lastEntry[lastEntry.length - 1];

    if(hasEntry || currentJournal.length == 1)
    {
      currentJournal[currentJournal.length - 1] = str;
    }
    else
    {
      currentJournal.push(str);
    }

    localStorage.setItem("journalDetails", JSON.stringify(currentJournal));
    //console.log(currentMind);

    //localStorage.setItem("mindExercises", JSON.stringify(currentMind));
    //currentCompleted.push(arrayUpdate);
    //localStorage.setItem("completedExercises", JSON.stringify(currentCompleted));

    if(currentMind.length != 0)
    {
      localStorage.setItem("mindExercises", JSON.stringify(currentMind));
       //alert($("#exerciseName").text() + "has been added to your journal!");
       $("#text").empty();
       $("#text").html($("#exerciseName").text() + "has been added to your journal!");
       $("#openJournal").popup("open");
    }
    else {
      //alert("Congratulations! You have completed all the Mind exercises. We'll refresh the list so you can do them again.");
      localStorage.setItem("mindExercises", JSON.stringify(mindExercises));
      $("#text").empty();
      $("#text").html("Congratulations! You have completed all the Mind exercises. We'll refresh the list so you can do them again.");
      $("#openJournal").popup("open");
    }
  }

  makeLists();


 // $("body").pagecontainer( "change", "#exercises1" );
}

function nextActivity(num)
{
  event.preventDefault();
  console.log($("#exerciseName").text() + ":" + $("#exerciseDescription").text());
  var currentExercise = $("#exerciseName").text() + ":" + $("#exerciseDescription").text();
  var currentBody = JSON.parse(localStorage.getItem("bodyExercises"));
  var currentMind = JSON.parse(localStorage.getItem("mindExercises"));

  var isBody = $.inArray(currentExercise, currentBody);
  var isMind = $.inArray(currentExercise, currentMind);

  console.log(currentBody);
  console.log("index " + isBody);

  var currentCompleted = JSON.parse(localStorage.getItem("completedExercises"));
  if(isBody != -1)
  {
    var next = isBody + num;
    if(next >= currentBody.length)
    {
      next = 0;
    }
    else if(next < 0)
    {
      next = currentBody.length - 1;
    }
    var nameAndDescription = currentBody[next].split(":");
  }
  else
  {
    var next = isMind + num;
    if(next >= currentMind.length)
    {
      next = 0;
    }
    else if(next < 0)
    {
      next = currentMind.length - 1;
    }

    var nameAndDescription = currentMind[next].split(":");
  }
    $("#exerciseName").html(nameAndDescription[0]);
    $("#exerciseDescription").html(nameAndDescription[1]);
    $("body").pagecontainer( "change", "#activity");
}

function todaysDate()
{
  var dateObject = new Date();
  var day = dateObject.getDate();
  var month = dateObject.getMonth()+1;
  var year = dateObject.getFullYear();
  var completeDate = month + "/" + day + "/" + year;
  return completeDate;
}


