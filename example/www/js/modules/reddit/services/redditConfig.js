(function() {
	'use strict';

	angular.module('reddit')
		.factory('RedditConfig', RedditConfig);

	function RedditConfig() {
		return {
			defaultPageSize: 40,
			upcomingPageSize: 500,
			defaultCommentCount: 100,
			bufferSize: 4,
			apiEndpoint: 'http://www.reddit.com'
		}
	};
	
})();
