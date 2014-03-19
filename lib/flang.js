var flang = angular.module('flang', []);

flang.service('chartService', function() {
	this.returnType = function(type) {
		if (type == 'pie') {
        	return {
                colors: ["#38a", "#222", "#666"],
                series: {
                    pie: {
                        show: true,
                        label: {
                            show: false,
                            formatter: function(label, series){
                                return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">'+
                                    label+'<br/>'+series.percent+'%</div>';
                            },
                            threshold: 0.1
                        }
                    }
                },
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#888", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: [5, 10], // distance from grid edge to default legend container within plot
                    backgroundOpacity: 0 // set to 0 to avoid background
                },
                grid: {
                    hoverable: false,
                    clickable: false
                }
        	};
		} else if (type == 'bar') {
			return {
				bars: { show: true }
			}
		}
	}
});

flang.directive('flotChart', function(chartService) {
    return {
        restrict: 'E',
		require: 'ngModel',
		scope: {
			ngModel: '=',
			chartType: '@',
			chartHeight: '@',
		},
        template: '<div></div>',
        replace: true,
        link: function(scope, elem, attrs) {
            scope.$watch('ngModel', function(model){
                if(model) {
                    scope.attributes = chartService.returnType(scope.chartType);
					elem.css('height', scope.chartHeight);
					$.plot(elem, model.data, scope.attributes);
                    elem.show();
                }
            });
       }
    }; 
});
