(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function displayNone() {
	document.getElementById("none-div").style.display = "block";
    document.getElementById("block-div").style.display = "none";
    document.getElementById("download-button").onclick = displayBlock();
}

function displayBlock() {
	document.getElementById("none-div").style.display = "none";
    document.getElementById("block-div").style.display = "block";
    document.getElementById("download-button").onclick = displayNone();
}