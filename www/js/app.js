angular.module('ubicla', ['ionic', 'ubicla.controllers', 'leaflet-directive'])

.run(function( $ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.sections = {
  	'smartbikes' :  	{'name': 'Smartbikes' , 	'fqsid' : '5294d88111d29aff21b2f8d3'}, 
  	'estacionamientos' :	{'name': 'Estacionamientos' ,	'fqsid' : '5070ff61e4b0339d310225d2'}, 
  	'biciamigos' :  	{'name': 'BiciAmigos' , 	'fqsid' : '50710a75e4b019e66b5c19d2'}, 
  	'talleres' :  		{'name': 'Talleres' , 		'fqsid' : '5073386f498e74a4f611cbe9'}, 
  };

})

.constant('UBICLA_CORE' , { URL : 'https://api.foursquare.com/v2/lists/%s?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006'} )

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
