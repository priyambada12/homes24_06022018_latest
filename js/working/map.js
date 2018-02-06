var app = angular.module('mapApp', []);

app.controller('mapCtrl',function($scope){
	$scope.loadMap = function(){
		var mapProp= {
		center:new google.maps.LatLng(12.9716,77.5946),
		zoom:5,
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	};
	$scope.loadMap();
});