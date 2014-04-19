function clearBox(){
  console.log($('input[name=userEmail]', '#userEmail').val());
  $('input[name=userEmail]', '#userEmail').val(" ");

  //$('input[name=userEmail]', '#userEmail').load('refresh.html #emptyDiv');
  console.log("This: " + $('input[name=userEmail]', '#send #userEmail').val());
}

function popupEmail(){
  var updated = updateEmail();
  if(updated){
    $("body").pagecontainer( "change", "#send" );
  }
}

function updateEmail() {
  var email = $('input[name=userEmail]', '#userEmail').val();

  if(email != ""){
    localStorage.setItem('userEmail', email);
    alert("Your email address has been updated!");
  }
  else
  {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function sendMail() {
    // var sender = localStorage.getItem('userEmail');
    // if(sender == null)
    // {
    //   $("#infoDiv").popup("open");
    // }

  var address = $('input[name=email]', '.email').val();

  var message = $('#message option:selected').text();

  //handle the user's own messages
  //talk about error handling

  var icon = " ";

  var choice = $('input[name=radio-choice]:checked', '#iconChoice').val();
  alert (choice);

  switch(choice)
  {
    case "1":
      icon = "cs.wellesley.edu/~ealtenho/happy/icon1.png";
      break;
    case "2":
      icon = "cs.wellesley.edu/~ealtenho/happy/icon2.png";
      break;
    case "3":
      icon = "cs.wellesley.edu/~ealtenho/happy/icon3.png";
      break;
    default:
      console.log("None selected");
  }

    if(address != "" && address != "Recipient Email Address" && message != "Choose..."){
      var email = "mailto:" + address
             + "?cc=" + address
             + "&subject=" + escape("Sending You HappyBlue Thoughts")
             + "&body=" + message + " - " + icon;
      window.location.href = email;
      console.log("Email" + email);
    }
    else
    {
      alert("Please enter a valid email address.");
    }
}
