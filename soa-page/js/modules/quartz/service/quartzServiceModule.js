angular.module('quartzServiceModule',['httpServiceModule'])
/*系统模块中 user服务*/
.service('quartzService',['http',function(http){
		return {
			page : function(context){
				var url = Urls.quartz.jobs+"/"+context.page;
				http.get(url,context,false,function(_context){context=_context});
				return context;
			}
			,insert:function(context){
				http.post(Urls.quartz.jobs,context,false,function(_context){context=_context});
				return context;
			}
		};
}])
;
