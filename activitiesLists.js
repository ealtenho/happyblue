//Ideally, we would have an array of all the activities available to do in the app.
//Then, for this user, we would save an array in the user's local storage of boolean values showing they have not done certain activities.
//When they have done an activity, we would change the boolean value.
//Then, for each activity they have not done, we would add that value to the list displayed on the activities page.
//We should also have two separate arrays if we want to split into mind and body
//This is a testing array of activities to populate the list:
var activities = ["Savor", "Sleep", "Testing", "Testing", "Testing"];

//Since I was writing code to fill an unordered list, I realized that was very similar to the array that would be needed for the journalpage
//So I made this one too
var journalArray = [["3/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/15/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/16/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["3/25/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/14/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/19/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"], ["4/20/14",  "Happy Blue", "Savor: Eat Your Favorite Food Slowly", "I started using happy blue and I like it!"]];


//On our pages that have lists I have set up empty divs
//This javascript fills those divs with the appropriate lists
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

//This should be the function that updates the journal when the user clicks "Done" on the exercises page
function completed()
{
  event.preventDefault();
  alert("This exercise has been added to your journal!");
  $("body").pagecontainer( "change", "#exercises1" );
}
