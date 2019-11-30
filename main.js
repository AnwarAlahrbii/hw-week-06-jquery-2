
$("#secret").hide();

$(document).ready(function(){
   
    $("#clicker").click(function(){
      $("#secret").show();
    });
  });

$(function(){
  $( "#clicker" ).click(function() {
    $( "#secret" ).slideDown(300);
      
    });
  });

$(document).ready(function() { 
    $("#clicker").click(function() { 
        
        $("#clicker").html("Click me to toggle a hidden secret!"); 
    }); 
}); 

// ## Exercise 2

$(function(){
  $( "#clicker" ).click(function() {
    $("#mysecret").slideUp();
      
    });
  });

  // ## Exercise 3

  $("#clicker").click(function(){
	$(".piz").attr("src", "http://rs284.pbsrc.com/albums/ll36/Bigsteve87/Gifs/Liz_Lemon_High_Five.gif~c200");
});
