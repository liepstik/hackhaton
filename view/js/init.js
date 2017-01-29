(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });



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