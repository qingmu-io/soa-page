angular.module('filterModule',[])
//日期格式化过滤器
.filter('dateformat',function(){
		return function(date){
			if(date)
			return new Date(date).toLocaleString();
			else return "";
		};
})
.filter("status",function(){
	return function(status){
		return status===-1?'暂停':'运行中'
	}
})
;