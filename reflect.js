
//In this file we need code to

//1) Evaluate the responses the user has

//2) If the user has not put in valid info - we need error highlighting

//3) We need a way to remove the error highlighting the next time the user clicks

//4) If the input is good, we need to save that reflection to local storage to use in the journal


/*
function saveToJournal {

  var currentJournal = JSON.parse(localStorage.getItem("journalDetails"));
    console.log("Current journal: " + currentJournal);
     var lastEntry = currentJournal[currentJournal.length - 1].split("|");
     var hasEntry = true;
     var last = lastEntry[0].substring(0,9);
     var isFirst = false;
      if(last.indexOf("No") != -1)
      {
        isFirst = true;
      }
     console.log("This is the last entry date: " + last);
     console.log(todaysDate());
     console.log("Is the last entry date equal: " + (last == todaysDate()));
     if(last != todaysDate())
     {
       hasEntry = false;
       lastEntry = [todaysDate(), "", "", ""];
     }

     var arrayUpdate = "<br>" + div.val();

    //currentCompleted.push(arrayUpdate);
    lastEntry[1] = lastEntry[1] + arrayUpdate;
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

    //This should be open journal popup
    alert("This reflection has been added to your journal!");
    $("body").pagecontainer( "change", "#home");
    makeLists();
}*/
