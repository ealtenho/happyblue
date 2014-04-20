var activities = ["Eat", "Sleep", "Testing", "Testing", "Testing"];
var journalArray = ["Entry 1",  "Entry 2", "Entry 3", "Entry 4"];

function makeLists()
{
      fillList("mindExercisesFill", activities, "activity");
      fillList("bodyExercisesFill", activities, "activity");
      fillList("journalEntriesFill", journalArray, "journalEntry");
}
//Fill a ul with a list of activities
function fillList(divName, arr, link)
{
  var div = $("#" + divName);
  console.log("List to fill #" + divName);
  var current = arr[0];


  for(var i = 0; i < arr.length - 1; i++)
  {
    current = arr[i];
    div.append("<li><a href=\"#" + link +"\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current + "</h3></a></li>");
  }
  current = arr[arr.length - 1];
  console.log(current);
  if(current != undefined)
  {
    console.log("append");
    div.append("<li class=\" ui-last-child\"><a href=\"#" + link + "\" class=\"ul-link-inherit ui-btn ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current + "</h3></a></li>");
  }
}

function completed()
{
  alert("This exercise has been added to your journal!");
  $("body").pagecontainer( "change", "#exercises1" );
}
