(function() {
  'use strict';
  
  angular.module('ionic-threads.pages')
    .controller('SubredditCtrl', SubredditCtrl);

  function SubredditCtrl($scope, $stateParams, $ionicLoading, Reddit) {
    $scope.subreddit = $stateParams.subreddit;
    $scope.filter = 'hot';
    $scope.posts = [];
    $scope.title = $stateParams.title;

    if ($scope.title === undefined) {
      $scope.title = $scope.subreddit
    };

    var refreshPosts = function(filter, limit, after) {
      $ionicLoading.show();

      Reddit.Posts.get($stateParams.subreddit, filter, limit, after).then(function(response) {
        $scope.posts = response.data.data.children
        $ionicLoading.hide();
      }, function(error) {
        $ionicLoading.show();
        console.log('Error');
      });
    }

    refreshPosts($scope.filter, 5);  
  };

})();
