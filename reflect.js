
//In this file we need code to

//1) Evaluate the responses the user has

//2) If the user has not put in valid info - we need error highlighting

//3) We need a way to remove the error highlighting the next time the user clicks

//4) If the input is good, we need to save that reflection to local storage to use in the journal

function saveToJournal() {

  var response1 = $("#question1").val();
  var response2 = $("#question2").val();
  var response3 = $("#question3").val();

  var errors = false;
  for(var i = 1; i <= 3; i++)
  {
    if($("#question" + i).val() == "")
    {
      errors = true;
      $("#question" + i).addClass("errorDisplay");
    }
  }

  if(!errors)
  {
  var entries = "Something that made me smile was: " + response1 + "<br> Somewhere I liked to go was: " + response2 + "<br> Something I was thankful for was: " + response3;
  journalSave(1, entries);
  $("#openJournalReflect").popup("open");
  makeLists();
  }
  else {
    alert("Please fix the highlighted errors.");
  }
}

function submitToEdit() {

  var errors = false;
  for(var i = 1; i <= 3; i++)
  {
    if($('#writeownmessage' + i).val() == "Write Your Own" || $('#writeownmessage' + i).val() == "")
    {
      errors = true;
      $('#writeownmessage' + i).addClass("errorDisplay");
    }
    else
    {
      $("#question" + i).val($("#writeownmessage" + i).val());

    }
  }

  if(!errors)
  {
    $("body").pagecontainer( "change", "#reflectEdit" );
  }
  else {
    alert("Please fix the highlighted errors.");
  }

}

function journalEdit(){

  var currentEntry = getEntry();
  console.log("I'm going to edit: " + currentEntry);
  currentEntry = currentEntry.split("|");
  console.log("Current Entry: " + currentEntry);

  var reflectArray = currentEntry[1].split("<br>");
  var activityArray = currentEntry[2].split("<br>");
  var writingArray = currentEntry[3].split("<br>");

  if(reflectArray[0] != "")
  {
    fillEdit(reflectArray, "reflectionDataEdit", "editR");
  }
   if(activityArray[0] != "")
  {
    fillEdit(activityArray, "activityDataEdit", "editA");
  }
  if(writingArray[0] != "")
  {
    fillEdit(writingArray, "writingDataEdit", "editW");
  }

  $("body").pagecontainer( "change", "#editEntry" );
}

function fillEdit(array, div, name)
{
  $("#" + div).empty();

  for(var i = 0; i < array.length; i++)
  {
    if(array[i].replace(/\s/g, "").length > 0)
    {
     $("#" + div).append("<input type=\"text\" id=\"" + name + i + "\" value = \"" + array[i] + "\"></input><br>");
    }
  }
}

function getEntry()
{
  var currentJournal = JSON.parse(localStorage.getItem("journalDetails"));
  console.log("The journal now is :" + currentJournal);
  var index = getIndex(currentJournal);
  console.log("Index = " + index);
  if(index != -1)
  {
    return currentJournal[index];
  }
}

function getIndex(currentJournal)
{
  console.log("Getting index for: " + currentJournal);
  var viewedEntry = $("#journalDate").text();
  var currentEntry;
  console.log("I'm editing: " + viewedEntry);

  for(var i = 0; i < currentJournal.length; i++)
  {
    currentEntry = currentJournal[i].split("|");

    if(currentEntry[0] == viewedEntry)
    {
      console.log("Found entry");
      return i;
    }
  }
}

function editJournal()
{
  var currentEntry = getEntry();
  currentEntry = currentEntry.split("|");

  currentEntry[1] = saveEdit(currentEntry[1].split("<br>"), "editR");
  currentEntry[2] = saveEdit(currentEntry[2].split("<br>"), "editA");
  currentEntry[3] = saveEdit(currentEntry[3].split("<br>"), "editW");

  var str = "";
  for(var i = 0; i < currentEntry.length - 1; i++)
  {
    str += currentEntry[i] + " | ";
  }
  str += currentEntry[currentEntry.length - 1];



  var currentJournal = JSON.parse(localStorage.getItem("journalDetails"));
  var index = getIndex(currentJournal);

  currentJournal[index] = str;

  localStorage.setItem("journalDetails", JSON.stringify(currentJournal));

  journalPageHelper(str);

  $("#confirmEdit").popup("open");
}

function saveEdit(array, name)
{
  var output = "<br>";
  for(var i = 0; i < array.length; i++)
  {
     var val = $("#" + name + "" + i).val();
     if( val != undefined)
     {
      array[i] = val;
      output += array[i] + "<br>";
     }
     else
    {
      array[i] = "";
    }
  }
  return output;
}
