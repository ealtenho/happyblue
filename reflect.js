
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
  var currentJournal = JSON.parse(localStorage.getItem("journalDetails"));
  var viewedEntry = $("journalDate").text();
  console.log("I'm editing" + viewedEntry);
  var date = $.inArray(viewedEntry, currentJournal);
  console.log(currentJournal[date] + " ");
}
