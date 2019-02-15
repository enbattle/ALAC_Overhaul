//num is the row number (in order of creation). This allows the user to edit/delete individual rows.
//There are 3 different time intervals per row (A, B, and C).

var num, counter, newRow;
var saveDay, dayPreset;
var saveStartA, saveEndA, saveStartB, saveEndB, saveStartC, saveEndC;
var startPresetA, endPresetA, startPresetB, endPresetB, startPresetC, endPresetC;

//The counter assigns a row number to a newly-created row.
var counter = 1;
var newRow = "";
var errorMessage = "Please address the following before saving this row:";
var invalid = false;

function addRow(num) {
	//Create a new row.
	newRow += "<div id = 'row" + counter + "'><br/>"; 
	newRow += "<div><span class = 'columns'>";
	
	//Create the day input dropdown.
	newRow += "<select id = 'day" + counter + "'>";
	newRow +=	"<option value=''></option>";
	newRow +=	"<option value='Sun'>Sun</option>";
	newRow +=	"<option value='Mon'>Mon</option>";
	newRow +=	"<option value='Tue'>Tue</option>";
	newRow +=	"<option value='Wed'>Wed</option>";
	newRow +=	"<option value='Thu'>Thu</option>";
	newRow +=	"<option value='Fri'>Fri</option>";
	newRow +=	"<option value='Sat'>Sat</option></select></span>";
	
	//Create the time A input field.
	newRow +=	"<span class = 'columns5'>";
	newRow +=	"<input type='time' name='time' id='startA" + counter + "'> -- ";
	newRow +=	"<input type='time' name='time' id='endA" + counter + "'></span>";
	
	//Create the time B input field.
	newRow +=	"<span class = 'columns5'>";
	newRow +=	"<input type='time' name='time' id='startB" + counter + "'> -- ";
	newRow +=	"<input type='time' name='time' id='endB" + counter + "'></span>";
	
	//Create the time C input field.
	newRow +=	"<span class = 'columns5'>";
	newRow +=	"<input type='time' name='time' id='startC" + counter + "'> -- ";
	newRow +=	"<input type='time' name='time' id='endC" + counter + "'></span>";
	
	//Create the Save/Edit, Delete, and Add Row buttons.
	newRow +=	"<span class = 'columns'>";
	newRow += "<button onclick = 'save(" + counter + ")' id='saveOrEdit" + counter + "'>Save</button>";
	newRow += "</span><span class = 'columns' id='delete" + counter + "'>"; 
	newRow += "<button class = 'underlinedButton' onclick = 'deleteRow(" + counter + ")'>Delete Row</button>";
	newRow += "</span></div><br/></div>";
	newRow += "<div class ='columns' id = 'newRow" + counter + "'>";
	newRow += "<button class = 'underlinedButton' onclick ='addRow(" + counter + ")'>New Row Here</button></div>";
	
	//Insert the new row.
	$(newRow).insertAfter("#newRow" + num); 
	
	//Update the appropriate variables.
	counter ++;
	newRow = "";
}

function save(num) {
	//Determine the day and time input variables (including time intervals A, B, and C).
	saveDay = document.getElementById("day" + num).value;
	saveStartA = document.getElementById("startA" + num).value;
	saveEndA = document.getElementById("endA" + num).value;
	saveStartB = document.getElementById("startB" + num).value;
	saveEndB = document.getElementById("endB" + num).value;
	saveStartC = document.getElementById("startC" + num).value;
	saveEndC = document.getElementById("endC" + num).value;
	
	//Check whether the user has selected a day.
	if (saveDay == "") {
		errorMessage += "\n\u2022 You must select a day.";
		invalid = true;
	} 
	
	//Check whether the user has selected at least one complete time interval.
	if (saveStartA == "" && saveEndA == ""  && saveStartB == "" && saveEndB == "" && saveStartC == "" && saveEndC == "") {
		errorMessage += "\n\u2022 You must include at least one complete time interval.";	
		invalid = true;			
	}
	
	//Check whether the user has entered a start time but not an end time (and vice versa).
	if ((saveStartA == "" && saveEndA != "") || (saveStartA !== "" && saveEndA == "") || (saveStartB == "" && saveEndB !== "")
	|| (saveStartB !== "" && saveEndB == "") || (saveStartC == "" && saveEndC != "") || (saveStartC !== "" && saveEndC == "")) {
		
		errorMessage += "\n\u2022 If you enter a start time for a time interval, then you must enter an end time (and vice versa).";
		invalid = true;	
	}
	
	//(Applies only to time intervals that are not incomplete):
	//Check whether the user has entered a start time that is later than its corresponding end time.
	if ((saveEndA != "" && saveStartA > saveEndA) || (saveEndB != "" && saveStartB > saveEndB) 
	|| (saveEndC != "" && saveStartC > saveEndC)){
		
		errorMessage += "\n\u2022 One or more of your start times is later than its end time.";
		invalid = true;	
	}
	
	//(Applies only to fields that are not blank):
	//Check whether the user has entered both the same start and end times in the same interval.
	if ((saveStartA != "" && saveStartA == saveEndA) || (saveStartB != "" && saveStartB == saveEndB)
	|| (saveStartC != "" && saveStartC == saveEndC)) {
		
		errorMessage += "\n\u2022 One or more of your time intervals has the same start and end time.";
		invalid = true;	
	}
	
	//(Applies only to fields that are not blank):
	//Check whether the user has included the same start time more than once in the same row.
	if ((saveStartA != "" && saveStartA == saveStartB) || (saveStartA != "" && saveStartA == saveStartC) 
	|| (saveStartB != "" && saveStartB == saveStartC)) {
		
		errorMessage += "\n\u2022 You have included the same start time more than once.";
		invalid = true;	
	}
	
	//(Applies only to fields that are not blank):
	//Check whether the user has included the same end time more than once in the same row.
	if ((saveEndA != "" && saveEndA == saveEndB) || (saveEndA != "" && saveEndA == saveEndC) 
	|| (saveEndB != "" &&saveEndB == saveEndC)) {
			
		errorMessage += "\n\u2022 You have included the same end time more than once.";
		invalid = true;	
	}
	
	//If everything has been correctly entered, update the row information.
	if (invalid == false) {
		//Update the day.
		$("#day" + num).replaceWith("<b id ='day" + num + "'>" + saveDay + "</b>");
		
		//Update the time interval fields
		//Time interval A:
		$("#startA" + num).replaceWith("<b id ='startA" + num + "'>" + saveStartA + "</b>");
		$("#endA" + num).replaceWith("<b id ='endA" + num + "'>" + saveEndA + "</b>");
		
		//Time interval B:
		$("#startB" + num).replaceWith("<b id ='startB" + num + "'>" + saveStartB + "</b>");
		$("#endB" + num).replaceWith("<b id ='endB" + num + "'>" + saveEndB + "</b>");
		
		//Time interval C:
		$("#startC" + num).replaceWith("<b id ='startC" + num + "'>" + saveStartC + "</b>");
		$("#endC" + num).replaceWith("<b id ='endC" + num + "'>" + saveEndC + "</b>");
		
		//Replace the Save button with the Edit Row button.
		$("#saveOrEdit" + num).replaceWith("<button class = 'underlinedButton' id = 'saveOrEdit" + num + "' onclick = 'edit(" + num + ")'>Edit Row</button>"); 
	}
	
	//If everything has not been correctly entered, output the error message.
	else {
		alert(errorMessage);
	}
	
	//Reset the appropriate variables.	
	invalid = false;	
	errorMessage = "Please address the following before saving this row:";
}

function edit(num) {
	//Determine preset values.
	dayPreset = document.getElementById("day" + num).innerHTML;
	startPresetA = document.getElementById("startA" + num).innerHTML;
	endPresetA =  document.getElementById("endA" + num).innerHTML;
	startPresetB = document.getElementById("startB" + num).innerHTML;
	endPresetB =  document.getElementById("endB" + num).innerHTML;
	startPresetC = document.getElementById("startC" + num).innerHTML;
	endPresetC =  document.getElementById("endC" + num).innerHTML;
	
	//Replace the displayed day with a day input field.
	$("#day" + num).replaceWith("<select id = 'day" + num + "'><option value='Sun'>Sun</option><option value='Mon'>Mon</option><option value='Tue'>Tue</option><option value='Wed'>Wed</option><option value='Thu'>Thu</option><option value='Fri'>Fri</option><option value='Sat'>Sat</option></select>");
	document.getElementById("day" + num).value = dayPreset;
	
	//Replace the displayed start/end times with time input fields.
	//Time interval A: 
	$("#startA" + num).replaceWith("<input type='time' name='time' value='" + startPresetA + "' id='startA" + num + "'>");
	$("#endA" + num).replaceWith("<input type='time' name='time' value='" + endPresetA + "' id='endA" + num + "'>");
	
	//Time interval B:
	$("#startB" + num).replaceWith("<input type='time' name='time' value='" + startPresetB + "' id='startB" + num + "'>");
	$("#endB" + num).replaceWith("<input type='time' name='time' value='" + endPresetB + "' id='endB" + num + "'>");
	
	//Time interval C:
	$("#startC" + num).replaceWith("<input type='time' name='time' value='" + startPresetC + "' id='startC" + num + "'>");
	$("#endC" + num).replaceWith("<input type='time' name='time' value='" + endPresetC + "' id='endC" + num + "'>");
	
	//Replace the Edit Row button with a Save button.
	$("#saveOrEdit" + num).replaceWith("<button id = 'saveOrEdit" + num + "' onclick = 'save(" + num + ")'>Save</button>");
}

function deleteRow(num){
	//Delete the row and its Add Row button.
	$("#row" + num).remove();
	$("#newRow" + num).remove();
}