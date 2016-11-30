
    
    Handlebars.registerHelper("formatDate", function(value) {
    	var dd = new Date(value);
    	 var time = dd.getFullYear() + '/' + (dd.getMonth()+1) + '/' + dd.getDay() +'   '+
    	            dd.getHours()+':'+dd.getMinutes()+':'+dd.getSeconds();
    	return time;
    });

      Handlebars.registerHelper("MonthAndDay", function(value) {
    	var dd = new Date(value);
    	var time =dd.getMonth() + '.' + dd.getDay();
    		return time;
    });

         Handlebars.registerHelper("time", function(value) {
    	var dd = new Date(value);
    	var time = dd.getHours()+':'+dd.getMinutes();
    		return time;
    });
         Handlebars.registerHelper("week", function(value) {
    	var dd = new Date(value);
    	var time = dd.getDay();
    		if(time==0){return "周一"}
    		else if (time==1) {return "周二"}
    		else if (time==2) {return "周三"}
    		else if (time==3) {return "周四"}
    		else if (time==4) {return "周五"}
    		else if (time==5) {return "周六"}
    		else if (time==5) {return "周日"}
    });

      