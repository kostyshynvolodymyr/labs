const model = {
    toBuy: [
        { name: "Ананасів", amount: 10, id: 1 },
        { name: "Буряків", amount: 15, id: 2 },
        { name: "Масла", amount: 30, id: 3 },
        { name: "Хліба", amount: 3, id: 4 }
    ],
    bougth: []
};
const buyApp = angular.module("buyApp", []);
buyApp.controller("toBuy", function ($scope) {
    $scope.data = model;
    $scope.buy = function (id) {
        $scope.data.bougth.push($scope.data.toBuy.find(item => item.id == id))  
        $scope.data.toBuy.splice($scope.data.toBuy.indexOf($scope.data.toBuy.find(item => item.id == id)), 1)
    }
});
buyApp.controller("bought", function ($scope) {
    $scope.data = model;
});