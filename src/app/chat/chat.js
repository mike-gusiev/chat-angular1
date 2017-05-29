function chatController($scope, $interval, appFactory, $http) {
	const _internal = {};
	$scope.messages = [];
	$scope.messagesList = [];
	$scope.user = appFactory.getUserName();

	this.$onInit = function () {
		$http
			.get('app/chat/messages.json')
			.then(response => {
				$scope.messagesList = response.data;
			}).then(() => {
			$interval(function(){
				_internal.addRandomMessage();
			}, 3000)
		});
	};

	$scope.sendMessage = function () {
		_internal.addMessage({
			userName: $scope.user,
			message: $scope.message
		});
		$scope.message = '';
		_internal.playSound();
	};

	_internal.addRandomMessage = function () {
		const random = Math.floor((Math.random() * $scope.messagesList.length));
		_internal.addMessage($scope.messagesList[random]);
	};

	_internal.addMessage = function (message) {
		message.date = _internal.getCurrentTime();
		$scope.messages.push(message);
	};

	_internal.playSound = function () {
		const audioElement = document.getElementsByTagName('audio')[0];
		audioElement.play();
	};

	_internal.getCurrentTime = function () {
		const date = new Date();
		const minutes = ((date.getMinutes() / 10 < 1) ? '0' : '') + date.getMinutes();
		const seconds = ((date.getSeconds() / 10 < 1) ? '0' : '') + date.getSeconds();
		return date.getHours() + ':' + minutes + ':' + seconds;
	};
}

export const chat = {
	template: require('./chat.html'),
	controller: chatController
};
