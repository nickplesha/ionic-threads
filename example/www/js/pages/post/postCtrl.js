(function() {
	'use strict';

	angular.module('ionic-threads.pages')
		.controller('PostCtrl', PostCtrl);

	function PostCtrl($scope, $stateParams, Reddit) {
		$scope.post = {
			data: angular.copy($stateParams)
		}

		var handleImage = function() {
			Reddit.URL.handleImage($scope.post);
		}

		var loadComments = function() {
			Reddit.Comments.get($scope.post.data.subreddit, $scope.post.data.id, 50).then(
	    		function(response) {
	    			$scope.comments = response[1].data.children;
	    		});
		}
		
		handleImage();
		loadComments();
	};
})();
