var searchTxt = null;
var currentPage=0;

$(document).ready(function(){
//	alert(GetQueryString("searchtxt"));
searchTxt =decodeURI(GetQueryString("searchtxt")); 
   alert(searchTxt);
   
    search();
})

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r!=null) return (r[2]); return null; 
    } 
//
//function UrlDecode(str){
//	  var ret="";
//	  for(var i=0;i<str.length;i++){
//	   var chr = str.charAt(i);
//	    if(chr == "+"){
//	      ret+=" ";
//	    }else if(chr=="%"){
//	     var asc = str.substring(i+1,i+3);
//	     if(parseInt("0x"+asc)>0x7f){
//	      ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6)));
//	      i+=5;
//	     }else{
//	      ret+=asc2str(parseInt("0x"+asc));
//	      i+=2;
//	     }
//	    }else{
//	      ret+= chr;
//	    }
//	  }
//	  return ret;
//	}

// 加载更多
function searchMore(){
	currentPage++;
	search();
}

function search(){	
	$.ajax({
                url: 'http://10.28.20.109:8080/gd/activity/searchtxt/list.do',
                type: 'POST',
                data: 	{	
								"searchTxt":searchTxt,
								"currentPage":currentPage
							},
                dataType: 'json',
                success: function(data){

                	var search_content = data.listActivity;
					var myTemplate = Handlebars.compile($("#search-template").html());
	                $('#content-left-w').html(myTemplate(search_content));

				},
				error:function(data){   
					alert('出错啦，请联系系统管理员！');      
					}
	        })
}
