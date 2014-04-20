// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ubicla', ['ionic', 'ubicla.controllers', 'leaflet-directive'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

		.state('app', {
			url:"/app",
			abstract: true,
			templateUrl: "templates/menu.html",
			controller: "MenuCtrl"
		})

		.state('app.home',{
			url:'/home',
			views:{
				'menuContent': {
					templateUrl: "templates/home.html",
					controller: "HomeCtrl"
				}
			}
		});

		$urlRouterProvider.otherwise('/app/home');
});