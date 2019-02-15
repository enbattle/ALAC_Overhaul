var chosen;
/* Changes the selections based on previous chosen fields */
/* If CSCI was picked, only CSCI courses would be displayed */
function classMentors() {
	chosen = document.getElementById("class").value;
	/* If nothing was chosen, output "No results." */
	if (chosen == "") {
		document.getElementById("result").innerHTML = "No results.";
	}
	/* If a class was selected, then go to that class's mentors page. */
	else {
		window.location.assign("classMentors.html");
	}
}

/* Adds classes to the fields based on the subject chosen */
/* Saves people the time of going through every single course and finding the correct courses as well */
function addClasses() {
	if (document.getElementById("subject").value == "ITWS" || document.getElementById("subject").value == "CSCI") {
		if (document.getElementById("subject").value == "ITWS") {
			$("#class").replaceWith("<select id='class'><option value='' selected>(Class)</option><option value='Intro to ITWS'>Intro to ITWS</option><option value='HCI'>HCI</option></select>");	
		}
		else {
			$("#class").replaceWith("<select id='class'><option value='' selected>(Class)</option><option value='Intro to CS'>Intro to CS</option><option value='Data Structures'>Data Structures</option></select>");
		}
	}
	else {
		$("#class").replaceWith("<select id='class'><option value=''>(Choose a subject first)</option></select>");
	}
}


