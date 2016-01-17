(function() {
    'use strict';

    angular.module('reddit')
        .factory('RedditResource', RedditResource)
        .factory('RedditCommentResource', RedditCommentResource);

    function RedditResource($resource, RedditConfig) {
        var endPoint = RedditConfig.apiEndpoint + "/r/:subreddit/:filter.json?limit=:limit&after=:after";
        return $resource(endPoint, { subreddit: '@subreddit', filter: '@filter', limit: '@limit', after: '@after'});
    }

    RedditResource.$inject = ['$resource', 'RedditConfig'];

    function RedditCommentResource($resource, RedditConfig) {
        var endPoint = RedditConfig.apiEndpoint + "/r/:subreddit/comments/:id/.json?limit=:limit";
        return $resource(endPoint, { subreddit: '@subreddit', id: '@id', limit: '@limit'}, {"get": {
            method: 'GET', isArray: true
        }});
    }

    RedditCommentResource.$inject = ['$resource', 'RedditConfig'];

})();
    