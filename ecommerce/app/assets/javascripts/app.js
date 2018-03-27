angular
	.module('app', ['ui.router', 'templates'])
	.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {
			$stateProvider

			.state('login', {
				url: '/login',
				templateUrl: 'main/_login.html',
				controller: 'LoginCtrl'
			})

			.state('home', {
				url: '/home',
				templateUrl: 'main/_home.html',
				controller: 'MainCtrl'
			})

			.state('search', {
				url: '/search',
				templateUrl: 'main/_search.html',
				controller: 'MainCtrl'
			});

			$urlRouterProvider.otherwise(function() {
                console.log("Could not find URL");
                return 'login'
            });
	}])