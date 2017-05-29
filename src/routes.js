export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app',
			resolve: {
				auth: ["$q", "appFactory", function($q, appFactory) {
					const userName = appFactory.getUserName();

					if (userName) {
						return $q.when(userName);
					} else {
						return $q.reject({ authenticated: false });
					}
				}]
			}
    })
    .state('login', {
      url: '/login',
      component: 'login',
			resolve: {
				auth: ["$q", "appFactory", function($q, appFactory) {
					const userName = appFactory.getUserName();
					return $q.when(userName);
				}]
			}
    });
}
