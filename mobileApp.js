/** This is a file of javascript that helps our web app behave like a mobile app **/
window.onload=init;
function init(){
    /** There is a weird flaw in the web app tags for iOS that makes our header want
    to be white text on a white background, and this code forces the text to be black on the white background
    by alerting the status-bar style after it is initialized **/
    if (window.navigator.standalone) {
        var m = document.getElementsByTagName('meta');
        for(var i = 0; i < m.length; i++)
        {
          if(m[i].name == 'apple-mobile-web-app-status-bar-style')
          {
            m[i].content='';
          }
        }
    }
}

/** This function is used to disable some of the default scrolling to
make our app seem more like a fixed native app. Scrolling will only be permitted
on those pages where scrolling is actually necessary **/
function preventDefault(e)
{
  e.preventDefault();
}
