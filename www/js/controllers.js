angular.module('ubicla.controllers', [])

.controller('MenuCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope, $stateParams){
})

.controller('MapCtrl', function($scope) {
	angular.extend($scope, {
		center: {
			lat: 19.043925,
			lng: -98.198204,
			zoom: 13
		},
		defaults: {
			tileLayer: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			tileLayerOptions: {
				detectRetina: true,
				reuseTiles: true,
			}
		}
	});
});