window.onload=init;
function init(){
    // var a = document.getElementsByTagName("a");
    //     for(var i=0; i<a.length; i++) {
    //          a[i].onclick=function(){
    //          window.location=this.getAttribute("href");
    //          return false;
    //          }
    //     }

    console.log("Fullscreen");
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

// document.ontouchmove = function(e){
//   e.preventDefault();
// }
