angular.module('myapp', [])

angular.module('myapp')
.controller('VotingCtrl', function ($scope) {
  $scope.numberOfYes = 0
  $scope.numberOfNo = 0

  $scope.voteYes = function () {
    $scope.numberOfYes++
  }

  $scope.voteNo = function () {
    $scope.numberOfNo++
  }
})
