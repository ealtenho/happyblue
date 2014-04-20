var activities = ["Eat", "Sleep", "Testing", "Testing", "Testing"];
var journalArray = [["3/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/15/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/16/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/25/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/19/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/20/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"]];

function makeLists()
{
      fillList("mindExercisesFill", activities, "activity");
      fillList("bodyExercisesFill", activities, "activity");
      var journalDates = new Array();
      for(var i = 0; i < journalArray.length; i++)
      {
        journalDates.push(journalArray[i][0]);
      }

      fillList("journalEntriesFill", journalDates, "journalEntry");
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
