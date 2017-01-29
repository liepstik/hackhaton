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

$(document).ready(function() {
    $('.slider').slider();
    console.log(document.URL);
    $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
       console.log("the json " + data); 
    //data is the JSON string
});
    $.getJSON(document.URL, function(data) {
       console.log("my json " + data); 
    });
    $("#download-button").click(function(){
        $("#index-banner").hide();
        $("#div-b").show();     
    });
});

  // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');

function sendElement() { 
    var firstName=document.getElementById("first_name").value;
    var currentAge=document.getElementById("current_age").value;
    var retirementAge=document.getElementById("retirement_age").value;
    
    if (firstName == "" || currentAge == "" || retirementAge == "")
        console.log("INFO PLS");
    else
    {
        var myObj = {"firstname": firstName,
                     "actualage": currentAge,
                     "retireage": retirementAge };
        console.log(myObj);
        var myJSON = JSON.stringify(myObj);
        console.log(myJSON);
        window.location = "../controller/start.ctrl.php?x=" + myJSON;    
    }
}