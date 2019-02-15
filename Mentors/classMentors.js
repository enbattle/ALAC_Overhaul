$(document).ready(function(){ 
	/* Save the class to the profile page */
	$("#saveClass").click(function(){
		alert("This class has been saved to your profile page.");
		$("#saveClass").replaceWith("<button class = 'underlinedButton' id = 'removeClass'> Undo Save </button>");
			
		/* Remove the class from the profile page */
		$("#removeClass").click(function(){
			alert("This class has been removed from the saved classes on your profile page.");
			$("#removeClass").replaceWith("<button id = 'saveClass'> Save Class </button>");										
		});
	});
});