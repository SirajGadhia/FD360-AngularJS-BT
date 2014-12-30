
//debugger;

var Directive360 = angular.module('Directive360', []);

Directive360.directive("ngSort360", function () {
    return {
        restrict: 'A',
        transclude: true,
        template:
          '<a ng-click="onClick()">' +
            '<span ng-transclude></span>' +
            '<i class="pull-right glyphicon" ng-class="{\'glyphicon-arrow-up\' : order === by && !reverse,  \'glyphicon-arrow-down\' : order===by && reverse}"></i>' +
          '</a>',
        scope: {
            order: '=',
            by: '=',
            reverse: '='
        },
        link: function (scope, element, attrs) {
            scope.onClick = function () {
                if (scope.order === scope.by) {
                    scope.reverse = !scope.reverse
                } else {
                    scope.by = scope.order;
                    scope.reverse = false;
                }
            }
        }
    }
});

Directive360.directive("loadingIndicator", function () {
    return {
        restrict: "A",
        template: "<div style='padding:40px'><div class='alert alert-warning' role='alert'><h1><strong>Loading!</strong></h1><div class='progress'><div class='progress-bar progress-bar-warning progress-bar-striped' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 100%'><span class='sr-only'></span></div></div></div></div>",
        link: function (scope, element, attrs) {
            scope.$on("loading-started", function (e) {
                element.css({ "display": "" });
            });

            scope.$on("loading-complete", function (e) {
                element.css({ "display": "none" });
            });

        }
    };
});

var Filter360 = angular.module('Filter360', []);

Filter360.filter('imagecheckmark', function () {
    return function (is_true) {
        return is_true ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>';
    };

});

Filter360.filter('courserowclass', function () {
    return function (is_true) {
        return is_true ? 'success' : 'default';
    };

});

Filter360.filter('employeeheaderclass', function () {
    // debugger
    return function (total, completed) {
        var _class = 'panel panel-info'

        if (completed == total) {
            _class = 'panel panel-success'
        }

        if (completed == 0) {
            _class = 'panel panel-danger'
        }
        return _class;
    };

});



var FD360 = angular.module('FD360', [
  'Filter360', 'Directive360'
]);





