import angular from 'angular';
import 'angular-mocks';
import {login} from './login';

describe('main component', () => {
	beforeEach(() => {
		angular
			.module('app', ['app/login.html'])
			.component('app', login);
		angular.mock.module('app');
	});

	it('should render the header, title, techs and footer', angular.mock.inject(($rootScope, $compile) => {
		const element = $compile('<app>Loading...</app>')($rootScope);
		$rootScope.$digest();
		expect(element.find('fountain-header').length).toEqual(1);
		expect(element.find('fountain-footer').length).toEqual(1);
	}));
});
