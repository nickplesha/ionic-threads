(function() {
	'use strict';

	angular.module('reddit')
		.factory('Reddit', Reddit);

	function Reddit(PostService, CommentService, URLService) {
	    return {
	    	Posts: PostService,
	        Comments: CommentService,
	        URL: URLService
	    }
	}

	Reddit.$inject = ['PostService', 'CommentService', 'URLService'];
	
})();
    