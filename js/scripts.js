 $(function(){
 	
 	var progress = $(".meter");
 	var goal = progress.attr('goal'); //Grab the target goal amount
 	var paid = progress.attr('paid'); //Grab the amount pledged so far
 	var percentComplete = (Math.floor(paid/goal*100)); //Convert amount pledged so far into percentage
 	var remaining =(Math.floor(goal-paid));
 	
 		progress.width(percentComplete+"%"); //Apply percentage to width of .project-progress in % units, of course
 		$(".funded").prepend(percentComplete+'%'); //Display the percent complete in the .funded span
 		$(".remaining").append(remaining); //Display the percent complete in the .funded span
 		$(".paid").append(paid); //Display the percent complete in the .funded span
 });