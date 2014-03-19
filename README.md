<h2>Overview</h2>
An Angular.js directive that provides a wrapper for the jQuery Flot Chart library.
Created/Maintained by Erik August Johnson

Current Version: 0.7.0
Check out example at Example at http://flang.erikaugust.com
Current chart types (chart-type attribute): pie, bar

Version 0.8 will include:
1. Donut, Stacked Chart additions
2. Easy chart customization options, the Angular way.

Version 1.0 will include:
1. Dropping jQuery dependency.

<h2>Options</h2>
chart-type: "pie", "bar"
chart-height: integer (number of pixels)

<h2>Usage</h2>
Five easy steps:

1. Include the required libs, jQuery first:
```
<script src="lib/jquery-1.7.2.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min.js"></script>
<script src="lib/jquery.flot.js"></script>
<script src="lib/jquery.flot.orderBars.js"></script>
<script src="lib/jquery.flot.pie.js"></script>
<script src="lib/jquery.flot.resize.js"></script>
<script src="lib/flang.js"></script>
<script src="app.js"></script>
```

2. Add the Flang module to your app:
```
var app = angular.module("flangExample", ["flang"]);
```

3. Define your data in your controller:
```
app.controller("flangCtrl", function ($scope, $http) {
    $scope.pie_example.data =
    [
        { label: "Series1",  data: 10},
        { label: "Series2",  data: 30},
        { label: "Series3",  data: 90},
        { label: "Series4",  data: 70},
        { label: "Series5",  data: 80},
        { label: "Series6",  data: 110}
    ];

```

4. Sprinkle in the HTML, examples:
```
<flot-chart chart-height="300" chart-type="pie" ng-model="pie_example"></flot-chart>
<flot-chart chart-height="500" chart-type="bar" ng-model="bar_example"></flot-chart>
```

5. Enjoy reusable flot charts.

--

