// Using Math random (gives number 0-0.99) create a random number generator between 0 and 102 to show all possible quotes randomly (Math.floor rounds it down).
//https://www.sitepoint.com/ajaxjquery-getjson-simple-example/

// Fetching data from ajax and being stored inside the parameters i.e data variable
// of $.getJSON callback function (button click handler generates new quote every time )


function tweetIt(){
    document.getElementById(share);
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + $(".amessage").text() + " ~"+  $(".anotherMessage").text();
    window.open(tweetUrl);
}


/**
 function quote(){
  document.getElementById();
  $(."").text();
} **/