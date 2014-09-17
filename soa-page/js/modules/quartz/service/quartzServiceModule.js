angular.module('quartzServiceModule',['httpServiceModule'])
/*系统模块中 user服务*/
.service('quartzService',['http',function(http){
		return {
			page : function(context){
				var url = Urls.quartz.jobs+"/"+context.page;
				console.log(context)
				http.get(url,context,false,function(_context){context=_context});
				return context;
			}
		};
}])
;
