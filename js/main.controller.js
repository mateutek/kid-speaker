'use strict';

angular.module('speech')
    .controller('MainCtrl',['$scope',function($scope){
        $scope.text = 'Witaj!';
        $scope.msg = new SpeechSynthesisUtterance();

        $scope.speak = function(){
            $scope.msg.text = $scope.text;
            window.speechSynthesis.speak($scope.msg);
        }
    }]);
