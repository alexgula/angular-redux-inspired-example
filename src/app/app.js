angular
    .module('app', [])
    .controller('app', ["$scope", function ($scope) {
    }])
    .directive("exMonitor", function () {
        return {
            restrict: "E",
            template: "<div>monitor here</div>"
        };
    });

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
