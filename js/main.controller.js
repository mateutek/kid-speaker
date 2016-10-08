'use strict';

angular.module('speech')
    .controller('MainCtrl',['$scope',function($scope){
        $scope.text = 'Witaj!';
        $scope.msg = new SpeechSynthesisUtterance();
        $scope.selectedIcon = -1;
        $scope.iconList = [
            {fa:'fa-car',text:'Samochód'},
            {fa:'fa-bell',text:'Dzwonek'},
            {fa:'fa-bicycle',text:'Rower'},
            {fa:'fa-bug',text:'Robak'},
            {fa:'fa-birthday-cake',text:'Ciasto'},
            {fa:'fa-binoculars',text:'Lornetka'},
            {fa:'fa-bed',text:'Łóżko'},
            {fa:'fa-circle',text:'Kółko'},
            {fa:'fa-clock-o',text:'Zegar'},
            {fa:'fa-child',text:'Dziecko'},
            {fa:'fa-eye',text:'Oko'},
            {fa:'fa-gift',text:'Prezent'},
            {fa:'fa-futbol',text:'Piłka'},
            {fa:'fa-headphones',text:'Słuchawki'},
            {fa:'fa-plane',text:'Samolot'},
            {fa:'fa-puzzle-piece',text:'Puzzel'},
            {fa:'fa-paper-plane-o',text:'Samolocik'},
            {fa:'fa-star',text:'Gwiazdka'},
            {fa:'fa-umbrella',text:'Parasol'},
            {fa:'fa-television',text:'Telewizor'}
        ];
        $scope.lettersList=['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','u','w','y','z','ź','ż'];

        $scope.speak = function(msg){
            if(typeof msg !='undefined'){
                if(msg.length>0){
                    $scope.msg.text = msg;
                }
            }
            else{
                $scope.msg.text = $scope.text;
            }
            window.speechSynthesis.speak($scope.msg);
        };

        $scope.selectLetter = function(index) {
            $scope.selectedLetter = index;
            $scope.text = $scope.lettersList[index];
            $scope.speak();
        };

        $scope.selectIco = function(index) {
            $scope.selectedIcon = index;
            $scope.retypeText = $scope.iconList[index].text;
            $scope.speak($scope.iconList[index].text);
        };
    }]);
