var myApp = angular.module("myApp", []);
myApp.controller("myController", function($scope) {
        $scope.split = function(text) {
            let msg;
            if (!text) {
                msg = "Будь ласка, уведіть дані!"
            } else {
                const arr = text.split(",").filter(element => element.trim() != "").map(element => element.trim());
                if (arr.length >= 4) {
                    msg = "Це забагато!"
                } else {
                    msg = "На здоров’я!"
                }

                $scope.arr = "Сніданок: " + arr.join(','); 
            }

            $scope.text = ""
            $scope.msg = msg;
        }
    }

);