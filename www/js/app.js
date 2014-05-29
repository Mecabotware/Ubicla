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

		.state('app.inicio',{
			url:'/inicio',
			views:{
				'menuContent': {
					templateUrl: "templates/inicio.html"
				}
			}
		})

		.state('app.mapa',{
			url:'/mapa/{seccion}',
			views:{
				'menuContent':{
					templateUrl: "templates/mapa.html",
				}
			}
		})

		.state('app.acerca',{
			url:'/acerca',
			views:{
				'menuContent':{
					templateUrl: "templates/acerca.html",
				}
			}
		})


		$urlRouterProvider.otherwise('/app/inicio');
});