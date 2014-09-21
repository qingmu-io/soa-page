angular.module('quartzControllerModule',['quartzServiceModule'])
.controller('jobs',['$scope','quartzService','$routeParams'
               ,function($scope,quartzService,$routeParams){
               	$scope.quartz = {};
				$scope.quartz.page = $routeParams.page;
				$scope.metas = ['作业名称','作业分组','触发器名称','触发器分组','执行表达式','状态','创建时间','创建者','类全名','操作'];
	 			$scope.context = SoaContext = quartzService.page($scope.quartz);
				console.log(SoaContext);
				
				angular.element("#puse").bind('click',function(){
					alert("暂停");
				})
				
				SoaContext.path = "jobs";
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