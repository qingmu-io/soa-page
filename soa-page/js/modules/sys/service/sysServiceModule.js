var userService = "userService";
var url = new StringBuffer().append(Constants.root).append("/sys/invoker").toString();
angular.module('sysServiceModule',['httpServiceModule'])
/*系统模块中 user服务*/
.service('userService',['http',function(http){
		return {
				/*用户登录方法*/
			login:function(context){
				context.service = 'userService';
				context.method = 'login';
				/*进行同步请求登录*/
				http.get(url,context,false,function(_context){context=_context;});
				console.log(context);
				return context;
			},
			page : function(context,fn){
				context.page = SOA.page;
				context.service = userService;
				context.limit = 5;
				context.method="page";
				http.get(url,context,false,function(_context){fn(_context)});
				return context;
			}
		};
}])
.service('roleService',[function(){
	var methods = {};
	
	return methods;
	
}]);
