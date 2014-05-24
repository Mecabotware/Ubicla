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
					templateUrl: "templates/home.html"
				}
			}
		})

		.state('app.smartbikes',{
			url:'/smartbikes',
			views:{
				'menuContent':{
					templateUrl: "templates/smartbikes.html",
				}
			}
		})

		.state('app.estacionamientos',{
			url:'/estacionamientos',
			views:{
				'menuContent':{
					templateUrl: "templates/estacionamientos.html",
				}
			}
		})

		.state('app.biciamigos',{
			url:'/biciamigos',
			views:{
				'menuContent':{
					templateUrl: "templates/biciamigos.html",
				}
			}
		})

		.state('app.talleres',{
			url:'/talleres',
			views:{
				'menuContent':{
					templateUrl: "templates/talleres.html",
				}
			}
		})

		.state('app.rutas',{
			url:'/rutas',
			views:{
				'menuContent':{
					templateUrl: "templates/rutas.html",
				}
			}
		})

		.state('app.ciclovias',{
			url:'/ciclovias',
			views:{
				'menuContent':{
					templateUrl: "templates/ciclovias.html",
				}
			}
		})

		.state('app.emergencias',{
			url:'/emergencias',
			views:{
				'menuContent':{
					templateUrl: "templates/emergencias.html",
				}
			}
		});

		$urlRouterProvider.otherwise('/app/home');
});