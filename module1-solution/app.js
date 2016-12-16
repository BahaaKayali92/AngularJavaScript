(function(){
'user strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope)
{
	$scope.value="bahaa";
	$scope.message="";
	$scope.checkLunch=function (){
	var value=$scope.value;
	var valueArray=value.split(",");
	if (value.length===0) {
$scope.message="Please enter data first";
	}
	else if (valueArray.length<=3) {
		$scope.message="Enjoy it!";
	}
	else 
		$scope.message="Too much!";

};
 
}


})();