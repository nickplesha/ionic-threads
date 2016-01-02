angular.module('reddit')
	.factory('RedditConfig', function() {
		return {
			defaultPageSize: 40,
			upcomingPageSize: 500,
			defaultCommentCount: 100,
			bufferSize: 4,
			apiEndpoint: 'http://www.reddit.com'
		}
	});
