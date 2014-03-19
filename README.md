<h2>Overview</h2>
<p><strong>Flang</strong> is an Angular.js directive that provides a wrapper for the jQuery Flot Chart library.<br />
Created/Maintained by Erik August Johnson</p>

<p>Current Version: 0.7.0<br />
Example at http://flang.erikaugust.com<br />
Current chart types (chart-type attribute): pie, bar</p>

<p><strong>Version 0.8 will include:</strong><br />
1. Donut, Stacked Chart additions<br />
2. Easy chart customization options, the Angular way.</p>

<p><strong>Version 1.0 will include:</strong>
1. Dropping jQuery dependency.</p>

<h2>Options</h2>
<p><strong>chart-type</strong>: "pie", "bar"<br />
<strong>chart-height</strong>: integer (number of pixels)</p>

<h2>Usage</h2>
Five easy steps:

Include the required libs, jQuery first:
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

Add the Flang module to your app:
```
var app = angular.module("flangExample", ["flang"]);
```

Define your data in your controller:
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

Sprinkle in the HTML, examples:
```
<flot-chart chart-height="300" chart-type="pie" ng-model="pie_example"></flot-chart>
<flot-chart chart-height="500" chart-type="bar" ng-model="bar_example"></flot-chart>
```

Enjoy reusable flot charts.

--

