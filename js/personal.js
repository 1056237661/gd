



$(document).ready(function() {

	$.ajax({
		url: '../../user/activity/published/list.do',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
            var publishTemplate = Handlebars.compile($("#publish-template").html());
            $('#personalActivity').html(publishTemplate(data));
	})






	
	
});
function personal (type) {
	
//	if(type=='publish')
	
	
	
	
	$.ajax({
		url: '../data/hotActivity.json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
        if(type=='publish'){
        	 var publishTemplate = Handlebars.compile($("#publish-template").html());
            $('#personalActivity').html(publishTemplate(data));
        }else if(type=='notAttend'){
        	  var  notAttendTemplate = Handlebars.compile($("#notAttend-template").html());
        	$('#personalActivity').html(notAttendTemplate(data));
        }else if(type=='Attend'){
        	  var AttendTemplate = Handlebars.compile($("#Attend-template").html());
            $('#personalActivity').html(AttendTemplate(data));
        }
    
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}
function personalComment (activityId) {
var element = '#'+'activityId'+activityId;
$(element).css({
	display: 'block'
});
}