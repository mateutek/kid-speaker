"use strict";angular.module("speech").controller("MainCtrl",["$scope",function(e){e.text="Witaj!",e.msg=new SpeechSynthesisUtterance,e.speak=function(){e.msg.text=e.text,window.speechSynthesis.speak(e.msg)}}]);