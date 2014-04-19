var activities = ["Eat", "Sleep", "Testing", "Testing", "Testing"];

//Fill a ul with a list of activities
function fillList(divName)
{
  var div = $("#" + divName);
  console.log("List to fill #" + div);
  var current = activities[0];

  for(var i = 0; i < activities.length - 1; i++)
  {
    current = activities[i];
    div.append("<li><a href=\"#\" class=\"ul-link-inherit ui-btn ui-btn-icon-right ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current + "</h3></a></li>");
  }
  current = activities[activities.length - 1];
  console.log(current);
  if(current != undefined)
  {
    console.log("append");
    div.append("<li class=\" ui-last-child\"><a href=\"#\" class=\"ul-link-inherit ui-btn ui-btn-icon-right ui-icon-happy-chevron\"><h3 class=\"ul-li-heading\">"+ current + "</h3></a></li>");
  }
}
