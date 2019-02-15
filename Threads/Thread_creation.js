$(document).ready(function(){
	
	$("#create").click(function(){
		//Check the input fields for errors and create the error message
		var $errors = "To create your thread, you must complete the following action(s): ";
		if ($("#title").val() == "" || $("#major").val() == "" || $("#class").val() == "") {
			if ($("#title").val() == "") {
				$errors += ("\n\u2022 Give your thread a title.");		
			}
			if ($("#major").val() == "") {
				$errors += ("\n\u2022 Enter the subject that your thread corresponds to.");		
			}
			if ($("#class").val() == "") {
				$errors += ("\n\u2022 Enter the class that your thread corresponds to.");		
			}	
			//If there are errors, include them in an alert message.
			alert($errors);
		}
	
		//If the thread has been created correctly, then go to the thread page.
		else {
			window.location.assign("Thread_page.html");
		}
	});
});