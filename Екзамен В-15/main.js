const model = {
    toBuy: [
        { name: "Йогурт №1", amount: "Наявно 5 ящиків марки:", id: 1 },
        { name: "Йогурт №2", amount: "Наявно 7 ящиків марки:", id: 1 },
        { name: "Йогурт №3", amount: "Наявно 0 ящиків марки:", id: 1 },
        { name: "Йогурт №4", amount: "Наявно 2 ящиків марки:", id: 1 },
        { name: "Йогурт №5", amount: "Наявно 26 ящиків марки:", id: 1 },
        { name: "Йогурт №6", amount: "Наявно 11 ящиків марки:", id: 1 }

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