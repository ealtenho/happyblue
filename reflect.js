
//In this file we need code to

//1) Evaluate the responses the user has

//2) If the user has not put in valid info - we need error highlighting

//3) We need a way to remove the error highlighting the next time the user clicks

//4) If the input is good, we need to save that reflection to local storage to use in the journal



function saveToJournal() {

  var response1 = $("#question1").val();
  var response2 = $("#question2").val();
  var response3 = $("#question3").val();

  for(int i = 1; i <= 3; i++)
  {
    if($("#question" + i).val(); == "")
    {
      $("#question" + i).addClass("errorDisplay");
    }
  }

  var entries = response1 + "<br>" + response2 + "<br>" + response3;
  journalSave(1, entries);
}

function submitToEdit() {

  for(var i = 1; i <= 3; i++)
  {
    if($('#writeownmessage' + i).val() == "Write Your Own" || $('#writeownmessage' + i).val() == ""))
    {
      $('#writeownmessage' + i).addClass("errorDisplay");
    }
    else
    {
      $("#question" + i).val($("#writeownmessage" + i).val());
    }
}
