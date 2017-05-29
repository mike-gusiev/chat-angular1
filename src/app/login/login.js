function loginController($scope, $location, appFactory, $window) {
	$scope.user = appFactory.getUserName();

	$scope.enterChat = function () {
		appFactory.setUserName($scope.user);
		$window.localStorage.setItem('userName', angular.toJson($scope.user));
		$location.path('/chat');
	};
}

export const login = {
	template: require('./login.html'),
	controller: loginController
};