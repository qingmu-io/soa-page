angular.module('quartzServiceModule',['httpServiceModule'])
/*系统模块中 user服务*/
.service('quartzService',['http',function(http){
		return {
			page : function(context){
				var url = Urls.quartz.jobs+"/"+context.page+"/"+window.limit;
				http.get(url,context,false,function(_context){context=_context});
				return context;
			}
			,insert:function(context){
				http.post(Urls.quartz.jobs,context,false,function(_context){context=_context});
				return context;
			}
			,update:function(context){
				http.put(Urls.quartz.jobs,context,false,function(_context){context=_context;});
				return context;
			}
			,delete:function(context){
				http.delete(Urls.quartz.jobs,context,false,function(_context){context=_context;});
				return context;
			}
			,lookup:function(context){
				var url = Urls.quartz.jos+"/"+context.id
				http.get(url,context,false,function(_context){context=_context;})
				return context;
			}
			,pause : function(context){
				var url = Urls.quartz.jos+"/pause/"+context.id
				http.get(url,context,false,function(_context){context=_context;})
				return context;
			}
		};
}])
;
