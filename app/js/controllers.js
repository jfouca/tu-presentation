'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('RegisterCtrl', ['$scope', '$location', '$http', 'messageCenterService',
    function($scope, $location, $http, messageCenterService) {
    $scope.user = {};

    $scope.register = function(user) {
        $http({
            url:'http://api.myapp.local/register',
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param({ email : user.email })
        })
        .success(function(data) {
            messageCenterService.add('success', 'You have successfully registered to our great app !', { status: messageCenterService.status.permanent });
            $scope.user = {};
            $location.path('homepage');
        })
        .error(function(data) {
            messageCenterService.add('danger', 'An error occured during registration, try again later.', { status: messageCenterService.status.permanent });
        });
    }
}]);

controllers.controller('ContactCtrl', ['$scope', '$location', '$http', 'messageCenterService',
    function($scope, $location, $http, messageCenterService) {
    $scope.message = {};

    $scope.contact = function(message) {
        $http({
            url:'http://api.myapp.local/contact',
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param(message)
        })
        .success(function(data) {
            messageCenterService.add('success', 'You have successfully sent your contact form. We will answer you briefly !', { status: messageCenterService.status.permanent });
            $scope.message = {};
            $location.path('homepage');
        })
        .error(function(data) {
            messageCenterService.add('danger', 'An error occured during confirmation, try again later.', { status: messageCenterService.status.permanent });
        });
    }
}]);

controllers.controller('TranslateCtrl', function($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});
