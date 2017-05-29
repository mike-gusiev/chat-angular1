function headerController($scope, appFactory, $window, $state) {
	$scope.user = appFactory.getUserName();

	$scope.logout = function() {
		appFactory.setUserName('');
		$window.localStorage.clear();
		$state.go('login');
	}
}


export const header = {
  template: require('./header.html'),
	controller: headerController
};
