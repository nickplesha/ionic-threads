angular.module('ionic-threads.pages')

.controller('PostCtrl', function($scope, $stateParams, Reddit) {
			$scope.post = {
				data: {
					id: $stateParams.id,
					url: $stateParams.url,
					thumbnail: $stateParams.thumbnail,
					selftext: $stateParams.selftext,
					subreddit: $stateParams.subreddit,
					title: $stateParams.title,
					author: $stateParams.author,
					num_comments: $stateParams.num_comments,
					score: $stateParams.score,
					name: $stateParams.name
				}
			}

			var handleImage = function() {
				Reddit.URL.handleImage($scope.post);
			}

			var loadComments = function() {
				Reddit.Comments.get($scope.post.data.subreddit, $scope.post.data.id, 100).then(
		    		function(response) {
		    			$scope.comments = response[1].data.children;
		    		});
			}
			
			handleImage();
			loadComments();
});
