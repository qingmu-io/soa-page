/**
 * author: liuyi
 * http request module
 */
angular.module('httpServiceModule',[])
.factory('http',[function(){
	return {
		get : function(url,context,isAsync,fn){
			this.request(url,context,'get',isAsync,fn);
		},
		post : function(url,context,isAsync,fn){
			this.request(url,context,'post',fn);
		},
		put : function(url,context,isAsync,fn){
			this.request(url,context,'put',fn);
		},
		delete : function(url,context,isAsync,fn){
			this.request(url,context,'delete',fn);
		},
		request : function(url,context,method,isAsync,fn){
				this.json(url,context,method,isAsync,fn);
		},
		jsonp : function(context,fn){
			$.getJSON("http://localhost:8080/soa-rest/sys/invoker?callback=?",context,
					function(result) {
						fn(result);
					});
		},
		json : function(myUrl, myData,method,isAsync,sufn){
			$.ajax({
			url : myUrl,
			data : myData,
			cache:false,
			async:isAsync,
			type:method,
			dataType : 'json',
			success : function(result){
				sufn(result);
			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR, textStatus, errorThrown);
				}
		});
		}
	}
}]);


