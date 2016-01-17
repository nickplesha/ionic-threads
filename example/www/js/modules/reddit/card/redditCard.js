(function() {
	'use strict';

	angular.module('reddit')
		.directive('redditCard', redditCard);

	function redditCard() {
		return {
			restrict: 'E',
			templateUrl: 'js/modules/reddit/card/redditCard.html',
			require: 'ngModel',
			scope: {
				post: '='
			},
			controller: function($scope, Reddit) {
				$scope.titleLimit = 70;
				$scope.subredditLimit = 16;
				
				var handleImage = function() {
					Reddit.URL.handleImage($scope.post);

					if (!$scope.post.data.thumbnail && !$scope.post.data.image) {
						$scope.titleLimit = 9999;
					};
				}

				handleImage();
			}
		}
	}
	
})();
