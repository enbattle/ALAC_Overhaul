$(document).ready(function(){    
	/* Hide and show responses in the thread page */
  $("#hideText").click(function(){
  	$("#Responses p, h3").hide(600);
  });
    
  $("#showText").click(function(){
  	$("#Responses p, h3").show(1000);
  });
		
	/* Save the thread to the profile page */
	$("#saveThread").click(function(){
		alert("This thread has been saved to your profile page.");
		$("#saveThread").replaceWith("<button class = 'underlinedButton' id = 'removeThread'> Undo Save </button>");
			
		/* Remove the thread from the profile page */
		$("#removeThread").click(function(){
			alert("This thread has been removed from the saved threads on your profile page.");
			$("#removeThread").replaceWith("<button id = 'saveThread'> Save Thread </button>");										
		});
	});
});

