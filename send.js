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

  var send = confirm("Leave the app to send your note via email?");
  if(send){
        // var sender = localStorage.getItem('userEmail');
        // if(sender == null)
        // {
        //   $("#infoDiv").popup("open");
        // }

          var address = $('input[name=email]', '.email').val();

          var message = $('#message option:selected').text();
          var writeOwn = $('#writeown').val();
          console.log("writeOwn");
          if(writeOwn != "Or Write Your Own.")
          {
            message = writeOwn;
          }

          var icon = " ";

          var choice = $('input[name=radio-choice]:checked', '#iconChoice').val();

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
            console.log(message);
            if(address != "" && address != "Recipient Email Address" && message != "Choose message..."){
              var email = "mailto:" + address
                     + "?cc=" + address
                     + "&subject=" + escape("Sending You HappyBlue Thoughts")
                     + "&body=" + message + " - " + icon;
              window.location.href = email;
              console.log("Email" + email);
            }
            else
            {
              alert("Please correct the highlighted errors.");
              if(address == "" || address == "Recipient Email Address")
              {
                $('input[name=email]', '.email').addClass("ui-focus");
              }

              if(message == "Choose message...")
              {
                $('.ui-select').addClass("ui-focus");
              }
            }
  }
}
