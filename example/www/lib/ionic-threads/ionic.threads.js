(function() {
	'use strict';

	angular.module('ionic.contrib.ui.ionThread', [])
		.directive('ionComment', ionComment)
		.directive('ionThread', ionThread);

	function ionComment() {
		return {
			restrict: 'E',
			scope: {
				comment: '='
			},
			template: '<ion-item ng-if="comment.data.body.length" class="ion-comment item">\
						<div class="ion-comment--author">{{comment.data.author}}:</div>\
						<div class="ion-comment--score"><span class="ion-arrow-up-a"></span>{{comment.data.score || 0}}</div>\
						<div class="ion-comment--text">{{comment.data.body}}</div>\
						<div class="ion-comment--replies">{{comment.data.replies.data.children.length || 0}} replies</div>\
						<ion-option-button ng-click="upvoteComment(comment)"><span class="ion-arrow-up-a" style="font-size:40px"></ion-option-button>\
						<ion-option-button ng-click="downvoteComment(comment)"><span class="ion-arrow-down-a" style="font-size:40px"></ion-option-button>\
						<ion-option-button ng-click="replyToComment()"><span class="ion-ios-chatbubble-outline" style="font-size:40px"></ion-option-button>\
					</ion-item>',
			controller: function($scope) {
				$scope.upvoteComment = function() {}

				$scope.downvoteComment = function() {}

				$scope.replyToComment = function() {}
			}
		}
	}

	function ionThread() {
		return {
			restrict: 'E',
			scope: {
				comments: '='
			},
			//Replace ng-if="!comment.showChildren" with ng-if="comment.showChildren" to hide all child comments by default
			//Replace comment.data.replies.data.children according to the API you are using
			template: '<script type="text/ng-template" id="node.html">\
							<ion-comment ng-click="toggleComment(comment)" comment="comment">\
							</ion-comment>\
							<div class="reddit-post--comment--container">\
								 <ul ng-if="!comment.showChildren" class="animate-if ion-comment--children">\
								    <li ng-repeat="comment in comment.data.replies.data.children">\
								        <ng-include src="\'node.html\'"/>\
								    </li>\
								</ul>\
							</div>\
						</script>\
						<ion-list ng-if="comments && comments.length > 0">\
						  <ul>\
						    <li ng-repeat="comment in comments">\
						        <ng-include src="\'node.html\'"/>\
						    </li>\
						  </ul>\
						</ion-list>',
			controller: function($scope) {
				$scope.toggleComment = function(comment) {
					if (comment.showChildren) {
						comment.showChildren = false;
					} else {
						comment.showChildren = true;
					}
				}			
			}
		}
	}
})();
