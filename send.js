
//This is the code I used to turn on and off the error highlighting
function errorOff(divName)
{
  console.log('click');
  $("" + divName).removeClass('errorDisplay');
  if($("" + divName).val() =='Recipient Email Address')
  {
    $("" + divName).val("");
  }
}

var message;
var address;
var writeOwn;
var icon = " ";

function sendMail() {

          address = $('input[name=email]', '.email').val();

          message = $('#message option:selected').text();
          writeOwn = $('#writeown').val();

          console.log("writeOwn");
          if(writeOwn != "Or Write Your Own.")
          {
            message = writeOwn;
          }

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
                 // var send = confirm("Leave the app to send your note via email?");
                 $("#sendConfirm").popup("open");

            }
            else
            {
              //alert("Please correct the highlighted errors.");
              $("#errorSend").popup("open");
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

function sendIt()
{
  var email = "mailto:" + address
                               + "?cc=" + address
                               + "&subject=" + escape("Sending You HappyBlue Thoughts")
                               + "&body=" + message + icon;
                        window.location.href = email;
                        console.log("Email" + email);

}

var count = 0;
var counter = 0;

function start() {
  count = 0;
  counter = setInterval(function(){timer(count, counter)}, 2000);
}

function timer()
{
  console.log("timer");
  count = count + 1;
  console.log(count);
  if(count >= 6)
  {
    clearInterval(counter);
    return;
  }

  document.getElementById("timer").innerHTML = count;
  console.log(count);
}

function startExercise()
{
  $("#animation").html("<div style=\"text-align: center; font-size: 40px; color: #004990;\">Breathe In</div><input type=\"range\" name=\"slider-1\" id=\"slider-1\" value=\"0\" min=\"0\" max=\"7\" /><div id=\"space\"></div>");
  count = 0;
  counter = setInterval(function(){breathe(count, counter)}, 4000);
}

function breathe()
{
  count = count + 1;
  if(count >= 12)
  {
    clearInterval(counter);
    $("#animation").html("<div class=\"exercise\" style=\"margin-top: -10px\" id=\"exerciseStartButton\"><a href=\"#\" onclick=\"javascript:startExercise()\"><span class=\"shortcutSpan\" ><br><br><br>Repeat Deep Breathing</span></a></div>");

    return;
  }
  else
  {
    if(count%2 == 0)
    {
      $("#animation").html("<div style=\"text-align: center; font-size: 40px; color: #004990;\">Breathe In</div><input type=\"range\" name=\"slider-1\" id=\"slider-1\" value=\"" + ((count/2) + 1).toString()  + "\" min=\"0\" max=\"7\" /><div id=\"space\"></div>");
    }
    else
    {
      $("#animation").html("<div style=\"text-align: center; font-size: 40px; color: #004990;\">Breathe Out</div><input type=\"range\" name=\"slider-1\" id=\"slider-1\" value=\"" + ((count/2) + 1).toString()  + "\" min=\"0\" max=\"7\" /><div id=\"space\"></div>");
    }
  }
}



function reEvaluate(selector, toFill){
  console.log("reEvaluate");
  console.log(this);
  if($('#' + selector + ' option:selected').text() != "Choose message...")
  {
    console.log(true);
    $("#" + toFill).val($('#' + selector + ' option:selected').text());
    console.log("end");
  }
}


