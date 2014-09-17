var userService = "userService";
angular.module('sysServiceModule',['httpServiceModule'])
/*系统模块中 user服务*/
.service('userService',['http',function(http){
		return {
				/*用户登录方法*/
			login:function(context){
				/*进行同步请求登录*/
				http.get(Urls.sys.login,context,false,function(_context){context=_context;});
				return context;
			},
			page : function(context){
				var url = Urls.sys.users+"/"+context.page;
				http.get(url,context,false,function(_context){context=_context});
				return context;
			}
		};
}])
.service('roleService',[function(){
	var methods = {};
	
	return methods;
	
}]);
