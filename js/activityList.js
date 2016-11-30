
var activityListTemplate = Handlebars.compile($("#activityList-template").html());

var activityType="allType";//搜索活动的类型，用于保存过滤条件，区别局部变量type

var lastTime="oneMonth"; //活动时间

var userUniversity="allSchool"; //活动学校

var currentPage = 1; // 活动页码

var allData = {},Data = []; //缓存返回数据

$(document).ready(function(){
	serachActivity();
});
/*加载更多活动*/
function load_more(){
	currentPage++;
	serachActivity();
}
/*获取活动类型*/
function get_Type(type){
	activityType = type;
	currentPage = 1;
	Data = [];
	serachActivity();
}
/*获取活动时间*/
function get_Time(time){
	lastTime = time;
	currentPage = 1;
	Data = [];
	serachActivity();
}
/*查询活动，加载数据！*/
function serachActivity(){ 
		$.ajax({
			url: '../../activity/school/type/lasttime/list.do',
			type: 'POST',
			dataType: 'json',
			data:{ 	
						activityType: activityType, 
						lastTime: lastTime, 
						userUniversity:userUniversity,
						currentPage:currentPage
					},
		})
		.done(function(data) {
			allData = data.listActivity;
			console.log(allData);
			Data= Data.concat(allData);			
			console.log(Data);
			$('#activityList').html(activityListTemplate(Data));		
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

 }


/*选择学校插件JS*/	
//弹出窗口
function pop()
	{
		//将窗口居中
		makeCenter();

		//初始化省份列表
		initProvince();

		//默认情况下, 给第一个省份添加choosen样式
		$('[province-id="1"]').addClass('choosen');

		//初始化大学列表
		initSchool(1);
	}
//隐藏窗口
function hide()
	{
		$('#choose-box-wrapper').css("display","none");
	}

function initProvince()
	{
		//原先的省份列表清空
		$('#choose-a-province').html('');
		for(i=0;i<schoolList.length;i++)
		{
			$('#choose-a-province').append('<a class="province-item" province-id="'+schoolList[i].id+'">'+schoolList[i].name+'</a>');
		}
		//添加省份列表项的click事件
		$('.province-item').bind('click', function(){
				var item=$(this);
				var province = item.attr('province-id');
				var choosenItem = item.parent().find('.choosen');
				if(choosenItem)
					
				$(choosenItem).removeClass('choosen');
				item.addClass('choosen');
				//更新大学列表
				initSchool(province);
			}
		);
	}

function initSchool(provinceID)
	{
		//原先的学校列表清空
		$('#choose-a-school').html('');
		var schools = schoolList[provinceID-1].school;
		for(i=0;i<schools.length;i++)
		{
			$('#choose-a-school').append('<a class="school-item" school-id="'+schools[i].id+'">'+schools[i].name+'</a>');
		}
		//添加大学列表项的click事件
		$('.school-item').bind('click', function(){


				var item=$(this);
				var school = item.attr('school-id');
				//更新选择大学文本框中的值
				$('#school-name').html(item.text());

				userUniversity = item.text();
				// 每选一次学校数据恢复默认
				currentPage = 1;
				Data = [];
				/*lastTime="oneDay";
				activityType="allType";*/
				serachActivity();

				//关闭弹窗
				hide();
					


			}
		);
	}

function makeCenter()
	{
		$('#choose-box-wrapper').css("display","block");
		$('#choose-box-wrapper').css("position","absolute");
		$('#choose-box-wrapper').css("top", Math.max(0, (($(window).height() - $('#choose-box-wrapper').outerHeight()) / 2) + $(window).scrollTop()) + "px");
		$('#choose-box-wrapper').css("left", Math.max(0, (($(window).width() - $('#choose-box-wrapper').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	}





