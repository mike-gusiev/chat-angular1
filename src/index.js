import angular from 'angular';

import 'angular-ui-router';
import 'angularjs-scroll-glue';
import routesConfig from './routes';

import {chat} from './app/chat/chat';
import {login} from './app/login/login';
import {header} from './app/app-common/header/header';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './app/_assets/styles/app.scss';


const chatApp = angular.module('app', ['ui.router', 'luegg.directives']);
chatApp.config(routesConfig)
	.run(function($transitions) {
		$transitions.onSuccess({ to: 'login' }, function($success) {
			$success.router.stateService.transitionTo('app');
		});
		$transitions.onError({ to: 'app' }, function($error$) {
			$error$.router.stateService.transitionTo('login');
		});
	})
	.factory('appFactory', ($window) => {
		let userName;

		function getUserName() {
			return userName;
		}

		function setUserName(user) {
			userName = user.userName;
		}

		function init() {
			if ($window.localStorage["userName"]) {
				debugger;
				let user = angular.fromJson($window.localStorage.getItem('userName'));
				userName = user.userName;
			}
		}
		init();

		return {
			setUserName: setUserName,
			getUserName: getUserName
		};
	})
	.component('fountainHeader', header)
	.component('app', chat)
	.component('login', login);
