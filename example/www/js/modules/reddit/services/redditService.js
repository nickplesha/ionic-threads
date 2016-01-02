angular.module('reddit')

	.factory('PostService', ['$http', 'RedditResource', 'RedditConfig',
	 function($http ,RedditResource, RedditConfig) {
	    return {
	      get: function (subreddit, filter, limit, after) {
	      	if (subreddit) {
	      		return RedditResource.get({ 
	          	subreddit: subreddit,
				filter: filter,
				limit: limit || RedditConfig.defaultPageSize,
				after: after
			  }).$promise;
	      	} else {
	      		return $http({method:'GET', url: RedditConfig.apiEndpoint + '/'+filter+'.json?limit=' + limit + '&after=' + after });
	      	}
	          
	      }
	    }
	}])

	.factory('CommentService', ['RedditCommentResource', 'RedditConfig', function(RedditCommentResource, RedditConfig) {
	    return {
	      get: function (subreddit, id, limit) {
	          return RedditCommentResource.get({ 
	          	subreddit: subreddit,
			    id: id,
			    limit: limit || RedditConfig.defaultCommentCount
		      }).$promise;
	      }
	    }
	}])

	.factory('URLService', ['RedditConfig', function(RedditConfig) {
		var getImgurUrl = function(url) {
			if (url.match(/\.(jpeg|jpg|gif|png|gifv)$/) === null && url.match(/\/gallery\//) === null && url.match(/\/a\//) === null) {
				url = url + '.jpg';
			};
			return url;
		}

		var handleEmptyImage = function(post) {
	      	if (post.data.image === "default" || post.data.image === "self") {
				post.data.image = undefined;
			};

			if (post.data.thumbnail === "default" || post.data.thumbnail === "self") {
				post.data.thumbnail = undefined;
			};

			return post;
		};

	    return {
	      handleImage: function(post) {
	      	if (post.data.url.indexOf('imgur') > -1) {				
				post.data.url = getImgurUrl(post.data.url);
			};

			if (post.data.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
				post.data.image = post.data.url;
			} else {
				post.data.image = post.data.thumbnail;
			};

			return handleEmptyImage(post);
	      }
	    }
	}]);;
