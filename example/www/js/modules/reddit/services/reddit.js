angular.module('reddit')
.factory('Reddit', ['PostService', 'CommentService', 'URLService',
    	function(PostService, CommentService, URLService) {
            return {
            	Posts: PostService,
                Comments: CommentService,
                URL: URLService
            }
        }
    ]);
    