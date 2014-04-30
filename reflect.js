//In this file we need code to
//1) Evaluate the responses the user has
//2) If the user has not put in valid info - we need error highlighting
//3) We need a way to remove the error highlighting the next time the user clicks
//4) If the input is good, we need to save that reflection to local storage to use in the journal



/*
function ownReflection() {

         
		
          var message = $('#message option:selected').text();
          var writeOwn = $('#writeown').val();
          console.log("writeOwn");
          if(writeOwn != "Or Write Your Own.")
          {
            message = writeOwn;
          }

          var icon = " ";

          var choice = $('#icon option:selected').text();
          console.log(choice);

          switch(choice)
          {
            case "Heart":
              icon = " - cs.wellesley.edu/~ealtenho/happy/icon1.png";
              break;
            case "Star":
              icon = " - cs.wellesley.edu/~ealtenho/happy/icon2.png";
              break;
            case "Thumbs Up":
              icon = " - cs.wellesley.edu/~ealtenho/happy/icon3.png";
              break;
            default:
              console.log("None selected");
          }

            console.log(message);

            if(address != "" && address != "Recipient Email Address" && message != "Choose message...")
            {
                  var send = confirm("Leave the app to send your note via email?");
                  if(send){
                        var email = "mailto:" + address
                               + "?cc=" + address
                               + "&subject=" + escape("Sending You HappyBlue Thoughts")
                               + "&body=" + message + icon;
                        window.location.href = email;
                        console.log("Email" + email);
                  }
            }
            else
            {
              alert("Please correct the highlighted errors.");
              if(address == "" || address == "Recipient Email Address")
              {
                $('input[name=email]', '.email').addClass("errorDisplay");
              }

              if(message == "Choose message...")
              {
                $('#message-button').addClass("errorDisplayButton");
              }
            }
}
*/

