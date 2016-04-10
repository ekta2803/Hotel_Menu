var app = angular.module('menu', []);
app.controller('menu', function($scope,$http) {
	var menuStr = '';

	$scope.quantity = [
	                   {qty : "1"},
	                   {qty : "2"},
	                   {qty : "3"},
	                   {qty : "4"}
	                   ];
	$scope.items = [
	                {item:"Nachos Cheese Fries", price:1.99,"active":false,"count":0},
	                {item:"Burrito",price:1.45,"active":false,"count":0},
	                {item:"Taco", price:2.49,"active":false,"count":0},
	                {item:"Quesadilla",price:3.09,"active":false,"count":0},
	                {item:"Cheese Nachos",price:2.45,"active":false,"count":0}	
	                ];
	$scope.invalid_login = true;
	$scope.noOrder = true;
	$scope.order = function() {
		$http({
			method : "POST",
			url : '/invoice',
			data : {
				"items" : $scope.items
			}
		}).success(function(data) {
			var tot = data.total;
			if(tot!=0.00){
				$scope.finalList = data.arr;
				$scope.total = data.total;
				$scope.invalid_login = false;
				$scope.noOrder = true;
			}
			else{
				$scope.noOrder = false;
				$scope.invalid_login = true;
			}
		}).error(function(error) {
			alert("Error"); 
		});
	};

	$scope.addOrder = function(item){
		item.active = !item.active;
		item.count++;
		//menuStr = menuStr + item.item+";"item.price;


	};

	$scope.remove = function(item){
		if(item.count>0){
		item.active = !item.active;
		item.count--;
		//menuStr = menuStr + item.item+";"item.price;

		}
	};



})