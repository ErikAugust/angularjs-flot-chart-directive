var app = angular.module("flangExample", ["flang"]);

app.controller("flangCtrl", function ($scope) { 

	$scope.generateBarData = function() {
    	
		$scope.bar_example = Object();
		$scope.bar_example.data  = [[ [0, Math.random(1, 10)], [1, Math.random(1, 10)], [2, Math.random(1, 10)], [3, Math.random(1, 10)],
    	[4, Math.random(1, 25)], [5, Math.random(1, 30)], [6, Math.random(1, 10)], [7, Math.random(1, 10)], [8, Math.random(1, 10)], [9, Math.random(1, 100)] ]];
		$scope.bar_example.options =
    	{
        bars: { show: true }
    	}

	};


	$scope.generatePieData = function() {
		$scope.pie_example = Object();
    	$scope.pie_example.data =
    	[
        	{ label: "Series1",  data: Math.random(1, 100)},
        	{ label: "Series2",  data: Math.random(1, 100)},
        	{ label: "Series3",  data: Math.random(1, 100)},
        	{ label: "Series4",  data: Math.random(1, 100)},
        	{ label: "Series5",  data: Math.random(1, 100)},
        	{ label: "Series6",  data: Math.random(1, 100)}
    	];
	};


$scope.generatePieData();
$scope.generateBarData();
});
