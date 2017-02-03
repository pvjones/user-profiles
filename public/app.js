angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl'
	})
	.state('settings', {
		url: '/settings',
		templateUrl: './views/settings.html',
		controller: 'mainCtrl'
	});

	$urlRouterProvider.otherwise('/');

});