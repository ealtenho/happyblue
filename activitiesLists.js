//Ideally, we would have an array of all the activities available to do in the app.
//Then, for this user, we would save an array in the user's local storage.
//When they have done the exercise, we would take it from the possible activities array and move it to the completed exercises array.
//We should also have two separate arrays if we want to split into mind and body
//This is a testing array of activities to populate the list:
var bodyExercises = ["Move : Exercise releases endorphins. Hit the gym, walk around the lake, or take ten minutes to walk a circuit wherever you are.", "Invigorate : Jump start yourself by drinking a cold glass of water or going outside for a minute or two to get fresh air.", "Soothe : Stretching decreases soreness and can help you wake up. Roll your shoulders back, stretch out your arms and legs, or just sit up straight! Any of these can increase your blood flow and attentiveness.", "Rehabiltate : If your body is telling you that it is tired, listen to that message. Help your body recover by drinking green tea with honey or one of your favorite home remedies.", "Utilize : Aromas can be great de-stressors! Try finding smelling scents like lavendar or chamomile if you are stressed. The scents can often be found in tea or lotion. These aromas can lessen anxiety.", "Enjoy : What are the best things about your current state of health? Do you love how your legs look? Have you been sickness-free for the last month? Did you just make it up the stairs without getting out of breath? Focus on the good by listing things you enjoy about your health."];
var mindExercises = ["Vent : Use one minute to just vent about everything that is making you tense. Then separate yourself from those thoughts and go back to what you were doing.", "Savor : Go to the dining hall and find the best food or dessert there. Eat it slowly, realizing how much you appreciate every bite.", "Hope : Identify three missed opportunities in your life. When you lost those opportunities, did different ones arise? How can you use optimism to get new opportunities in the future?", "Release : Take a piece of paper and draw a frown in the middle of it. By the frown, write something negative that is bothering you. Then fill the rest of the page with smiles and positive things. Next, hold the page at arms distance and realize how small the frown is in perspective.", "Sleep : Take a power nap for twenty minutes to refresh yourself. Sleep deprivation can have the same effect on the brain as a high blood alcohol content.", "Learn : There is a whole field of study devoted to helping you become happier. Google positive psychology to learn the most currently studied ways to be more positive.", "Pamper : Remind yourself that you are awesome. Give yourself some me time - paint your nails, put on your favorite outfit, or just think of three things you do really well.", "Decide : Make one goal for this week. How about typing your notes up after class? Having and completing small goals will help you feel in control.", "Rethink : Reframing negative events as positive learning opportunites gives you an optimistic outlook. Think of a negative event. Remember how you reacted. Then imagine a healthier behavior."];

//Since I was writing code to fill an unordered list, I realized that was very similar to the array that would be needed for the journalpage
//So I made this one too
var journalArray = [["3/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/15/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/16/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/25/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/19/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/20/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"]];

//Initial completed array
//var completedArray = ["First", "Second"];

//This is a filler array to show the user that they have no journal entries yet.
//Once a journal is started, this will be saved over in local storage
var journalArrayInitial = ["No entries yet! | Complete a reflection to see your thoughts recorded here. | Complete an exercise to see a record of it here. | Write a journal entry to see a record of it here."];

if(localStorage.getItem("journalDetails") == null)
{
  console.log("Setting Initial");
  console.log("IN HERE");
  localStorage.setItem("journalDetails", JSON.stringify(journalArrayInitial));
}

//The first time the user opens the app, they will have no array in local storage. Put the arrays in local storage.
if(localStorage.getItem("bodyExercises") == null)
{
  console.log("setting body exercises");
  localStorage.setItem("bodyExercises", JSON.stringify(bodyExercises));
}

if(localStorage.getItem("mindExercises") == null)
{
  console.log("setting mind exercises");
  localStorage.setItem("mindExercises", JSON.stringify(mindExercises));
}

//Make an array to save the user's completed exercises
// if(localStorage.getItem("completedExercises") == null)
// {
//   console.log("setting completed exercises");
//   localStorage.setItem("completedExercises", JSON.stringify(completedArray));
// }



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


  for(var i = arr.length - 1; i > 0; i--)
  {
    current = arr[i];
    div.append("<li><a href=\"#\" onclick=\"javascript:journalPage('" + arr[i] +"')\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current.split("|")[0] + "</h3></a></li>");
  }
  current = arr[0];
  console.log(current);
  if(current != undefined)
  {
    console.log("Parameter: " + arr[0]);
    div.append("<li class=\" ui-last-child\"><a href=\"#\" onclick=\"javascript:journalPage('" + arr[0] + "')\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current.split("|")[0] + "</h3></a></li>");
  }
}

function journalPage(journalDetail)
{
  //console.log(exerciseDetail);

  journalPageHelper(journalDetail);
  $("body").pagecontainer( "change", "#journalEntry" );
}

function journalPageHelper(journalDetail)
{
  var journalDetails = journalDetail.split("|");
  //console.log(nameAndDescription);
  $("#journalDate").html(parseDisplay(journalDetails[0]));
  $("#reflectionData").html(parseDisplay(journalDetails[1]));
  $("#activityData").html(parseDisplay(journalDetails[2]));
  $("#writingData").html(parseDisplay(journalDetails[3]));
}

function exercisePage(exerciseDetail)
{
  console.log("Calling function");
  //console.log("Calling");
  event.preventDefault();
  console.log("Making page for: " + exerciseDetail);
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

  var isBody = $.inArray(currentExercise, currentBody);
  var isMind = $.inArray(currentExercise, currentMind);

  console.log(currentBody);
  console.log("index " + isBody);

  var currentCompleted = JSON.parse(localStorage.getItem("completedExercises"));
  if(isBody != -1)
  {
    //var arrayUpdate = "<br>" + currentBody.splice(isBody, 1);
    journalSave(2, currentBody.splice(isBody, 1));

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
    //var arrayUpdate = "<br>" + currentMind.splice(isMind, 1);
    journalSave(2, currentMind.splice(isMind, 1));

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

//Get and format today's date so we can associate journal entries with the date
function todaysDate()
{
  var dateObject = new Date();
  var day = dateObject.getDate();
  var month = dateObject.getMonth()+1;
  var year = dateObject.getFullYear();

  if(day<10){
    day = '0' + day;
  }

  if(month < 10){
    month = '0' + month;
  }
  var completeDate = month + "/" + day + "/" + year;
  return completeDate;
}

function evaluateWrite()
{
  var div = $("#writeEntry");
  console.log("Div text = " + div.val());
  if(div.val() == "What are you happy about?" || div.val() == "")
  {
    //alert("Please correct the highlighted errors.");
    $("#errorWrite").popup("open");
    div.addClass("errorDisplay");
  }
  else
  {
    journalSave(3, goodSyntax(div.val()));
    //alert("This entry has been added to your journal!");
    $("#saveWrite").popup("open");
    div.val("What are you happy about?");
    //$("body").pagecontainer( "change", "#journal");
    makeLists();
  }
 }

//Helper method for anytime something needs to be saved in the local storage journal array
function journalSave(type, value)
{
     var currentJournal = JSON.parse(localStorage.getItem("journalDetails"));
     //console.log("Current journal: " + currentJournal);

     var lastEntry = currentJournal[currentJournal.length - 1].split("|");
     var hasEntry = true;
     var last = (lastEntry[0]).substring(0, 10);
     console.log(last);
     var isFirst = false;
      if(last.indexOf("No") != -1)
      {
        console.log("Is first");
        isFirst = true;
      }

      console.log(todaysDate());
      console.log("Length of last" + last.length);
      console.log("Length of today" + todaysDate().length);
     if(last != todaysDate())
     {
       hasEntry = false;
       lastEntry = [todaysDate(), "", "", ""];
       console.log("This is not the same day");
     }

    var arrayUpdate = "<br>" + value;

    lastEntry[type] = lastEntry[type] + arrayUpdate;
    var str = "";
    for(var i = 0; i < lastEntry.length - 1; i++)
    {
      str += lastEntry[i] + " | ";
    }
    str += lastEntry[lastEntry.length - 1];

    console.log("Last entry: " + lastEntry);

    if(hasEntry || isFirst)
    {
      currentJournal[currentJournal.length - 1] = str;
    }
    else
    {
      currentJournal.push(str);
    }
    localStorage.setItem("journalDetails", JSON.stringify(currentJournal));
}

//Helper method to escape values that could cause trouble in the user's entries
function goodSyntax(value){
  value = value.replace(/\n/g, "<br>");
 // value = value.replace(/!/g, ".");
 value = value.replace(/"/g, "~!!");
  value = value.replace(/'/g, "~");

  console.log(encodeURI(value));
  return value;
}

function parseDisplay(value){
  console.log("Before value: " + value);
  value = value.replace(/~!!/g, "\"");
  value = value.replace(/~/g, "'");

  return value;
}

//Provide a random maze rather than always the same
function mazeRandom()
{
  var random  = Math.floor((Math.random()*6)) + 1;
  $("#maze").html("<img src=\"maze" + random + ".png\" height=\"200\">");
  $("body").pagecontainer( "change", "#play" );
}
