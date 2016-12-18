app.controller('FeedCtrl', ['$scope','FeedService','$ionicPopup',function ($scope, Feed, $ionicPopup) {
  $scope.name = 'Pavel Tyutyunnik';
  $scope.name2 = function () {
    return 'Vasya';
  };
  $scope.feed = {};
  $scope.loadFeed = function() {

    Feed.parseFeed($scope.feed.url).then(function (res) {
      if (res.data.responseData != null) {
        $scope.error = null;
        $scope.feeds = res.data.responseData.feed.entries;
      }
      else {
        $scope.error = 'Invalid RSS Feed';
        $scope.feeds = null;
      }
    });
  }

  $scope.showError = function (content) {
    $ionicPopup.alert({
      title: 'Error',
      content: content
    }).then(function (res) {
      console.log(content);
    });
  }

  $scope.clearFeeds = function () {
    $scope.feeds =null;
    $scope.feed.url = '';
  }

}]);/**
 * Created by paul on 15.12.16.
 */
