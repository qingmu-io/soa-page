angular.module('quartzControllerModule',['quartzServiceModule'])
.controller('jobs',['$scope','quartzService','$routeParams'
               ,function($scope,quartzService,$routeParams){
               	$scope.quartz = {};
				$scope.quartz.page = $routeParams.page;
				$scope.metas = ['作业名称','作业分组','执行表达式','状态','类全名','创建者','创建时间','操作'];
	 			$scope.context = SoaContext = quartzService.page($scope.quartz);
				SoaContext.path = "jobs";
				
				$scope.pause = function(id){
					var context = new Object;
					context.id = id
					context = quartzService.puse(context);
					
				}
				$scope.lookup = function(id){
						var context = new Object;
					context.id = id
					context = quartzService.puse(context);
				}
				$scope.delete = function(id){
					var context = new Object;
					context.id = id
					context = quartzService.puse(context);
				}
				
}])
.controller('jobsUpdate',['$scope','quartzService','$routeParams',
				function($scope,quartzService,$routeParams){
			var context = {};
			context.id = $routeParams.id;
			context = quartzService.lookup(context);
			$scope.job = context.rows;
}])
.controller('jobsAdd',['$scope','quartzService',function($scpoe,quartzService){
		$scpoe.job={
				jobName :''
				,jobGroup :''
				,triggerName : ''
				,triggerGroup :''
				,status : 1
				,src :''
				,clazz:''
		};
		
		angular.element("#insert").bind('click',function(){
			quartzService.insert($scpoe.job);
//			console.log($scpoe.job)
		});
		
//		$scpoe.$watch("job.jobName",function(){
//			console.log($scpoe.job);
//		})
	/*	angular.element('#insert').bind('click',function(){
			
		});*/
}])
.controller('help',['$scope',function($scope){}])
;