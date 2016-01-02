angular.module('reddit')
    .factory('RedditResource', ['$resource', 'RedditConfig', function($resource, RedditConfig) {
            var endPoint = RedditConfig.apiEndpoint + "/r/:subreddit/:filter.json?limit=:limit&after=:after";
            return $resource(endPoint, { subreddit: '@subreddit', filter: '@filter', limit: '@limit', after: '@after'});
        }
    ])
    .factory('RedditCommentResource', ['$resource', 'RedditConfig', function($resource, RedditConfig) {
            var endPoint = RedditConfig.apiEndpoint + "/r/:subreddit/comments/:id/.json?limit=:limit";
            return $resource(endPoint, { subreddit: '@subreddit', id: '@id', limit: '@limit'}, {"get": {
                method: 'GET', isArray: true
            }});
        }
    ]);
    