angular.module('soaDirective',[])
.directive('page',function(){
    return {
        restrict : 'E',
        templateUrl : 'template/directive/page.html',
        controller:['$scope',function($scope){
        	$scope.path = SoaContext.path;
        	$scope.pages = [];
        	for(var i=SoaContext.startpage;i<=SoaContext.endpage;i++){
        		var map = {};
        		map.i=i;
        		if(SoaContext.page === i)
        		map.active='active';
        		$scope.pages.push(map);
        	}
        }],
        link: function(scope, element, attrs){
        }
    };
});
