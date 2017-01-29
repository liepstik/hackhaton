(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//function displayNone() {
//	document.getElementById("none-div").style.display = "block";
//    document.getElementById("block-div").style.display = "none";
//    document.getElementById("download-button").onclick = displayBlock();
//}
//
//function displayBlock() {
//	document.getElementById("none-div").style.display = "none";
//    document.getElementById("block-div").style.display = "block";
//    document.getElementById("download-button").onclick = displayNone();
//}

$(document).ready(function(){
    $("#download-button").click(function(){
        $("#index-banner").hide();
        $("#div-b").show();
        
    });
    
});

$(document).ready(function(){
    $('.slider').slider();
    });

  // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');
        