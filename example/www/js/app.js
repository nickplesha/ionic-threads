//ionic threads example app
//by Nikola Pleša
//
//2016
(function() {
  'use strict';
  
  angular.module('ionic-threads', ['ionic', 'ionic-threads.pages', 'reddit', 'ionic.contrib.ui.ionThread'])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
      $ionicConfigProvider.backButton.previousTitleText(false).text('');
      $stateProvider

      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

      .state('tab.subreddit', {
        url: '/subreddits/:subreddit?title',
        views: {
          'tab-subreddits': {
            templateUrl: 'js/pages/subreddit/subreddit.html',
            controller: 'SubredditCtrl'
          }
        }
      })

      .state('tab.post', {
        url: '/post/:id?title&subreddit&score&num_comments&selftext&url&thumbnail&author&name',
        views: {
          'tab-subreddits': {
            templateUrl: 'js/pages/post/post.html',
            controller: 'PostCtrl'
          }
        }
      })

      $urlRouterProvider.otherwise('/tab/subreddits/?title=Frontpage');

    });
})();
