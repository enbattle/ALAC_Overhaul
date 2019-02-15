$(document).ready(function(){
	//When one dropdown is selected, the selection options for another dropdown become available.
   $("#major").change(function(){
        var val = $(this).val();
        if(val == "itws"){
            $("#class").html("<option value=''>-- select one --</option><option value='Intro to ITWS'>Intro to ITWS</option><option value='websys'>Web Systems Development</option>");
        }
        if(val == "gsas"){
            $("#class").html("<option value=''>-- select one --</option><option value='Game Mechanics'>Game Mechanics</option><option value='Intro to Game Design'>Intro to Game Design</option>");
        }
    });
    $("#class").change(function(){
        var val = $(this).val();
        if(val == "Intro to ITWS"){
            $("#prof").html("<option value=''>-- select one --</option><option value='Plotka'> Richard Plotka</option>");
        }
    });
    $("#prof").change(function(){
        var val = $(this).val();
        if(val == "Plotka"){
            $("#section").html("<option value=''>-- select one --</option><option value='1'>Section One</option>");
        }
    });
    $("#section").change(function(){
        var val = $(this).val();
        if(val == "1"){
            $("#topic").html("<option value=''>-- select one --</option><option value='Lab 10'>Lab 10</option>");
        }
    });
	
	$("#search").click(function() {
		$.ajax({
   	 	type: "GET",
   	 	url: "thread_search.json",
   	 	dataType: "json",
			
   	 	success: function(responseData, status){
				//The search results
   	  	var results = "";
				//Indicates whether any search results were found
				var match = false;
				
				//For each item in the array, check to see whether it meets all of the search criteria:
    	 	$.each(responseData.thread, function(i, item) {
       		if ($("#major").val() == item.subject) {
						if ($("#class").val() == item.class || $("#class").val() == "") {
							if ($("#semester").val() == item.semester || $("#semester").val() == "") {
								if ($("#section").val() == item.section || $("#section").val() == "") {
									if ($("#prof").val() == item.professor || $("#prof").val() == "") {
										if ($("#topic").val() == item.topic || $("#topic").val() == "") {
											results += "<div><a href = './Thread_page.html'>" + item.title + "</a></div>";
											match = true;
										}
									}
								}
							}
						}
					}
      	});
				
				if (match == false) {
					results += "No results.";
				}
				
			//Use the determined output to create the html of the element with the id of 'results'
      $('#results').html(results);
			//In the event of an error, display a message ('msg')
    	}, error: function(msg) {
      	// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
  	});
	});

});

		