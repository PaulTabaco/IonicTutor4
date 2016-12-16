app.controller('FeedCtrl', ['$scope','FeedService',function ($scope, Feed) {
  $scope.name = 'Pavel Tyutyunnik';
  $scope.name2 = function () {
    return 'Vasya';
  };
  $scope.feed = {};
  $scope.loadFeed = function() {
    //console.log($scope.feed.url);
    Feed.parseFeed($scope.feed.url).then(function (res) {
      $scope.feeds = res.data.responseData.feed.entries;
      console.log(res.data.responseData.feed.entries);
      //console.log(res);

    });
  }
}]);/**
 * Created by paul on 15.12.16.
 */
