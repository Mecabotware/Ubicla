angular.module('ubicla.controllers', [])

.controller('MenuCtrl', function($scope) {
})


.controller('MapCtrl', function($scope, $stateParams, $http, leafletData, UBICLA_CORE ,$rootScope) {
	
	$scope.seccion = {};
	Markers = {};
	
	var url = UBICLA_CORE.URL.replace(/%s/g, $rootScope.sections[ $stateParams.seccion ].fqsid );
	
	$scope.seccion.nombre = $rootScope.sections[ $stateParams.seccion ].name;
	
	function onLocationFound(e){
		leafletData.getMap().then(function(map) {
			geoCircle = L.circle(e.latlng, 15, {
			    color: 'red',
			    fillColor: '#f03',
			    fillOpacity: 0.5
			}).addTo(map);
        });
			
	}

	$scope.geolocateMe = function(){
		leafletData.getMap().then(function(map) {
			map.on('locationfound', onLocationFound)
            map.locate({setView: true, maxZoom: 16});
        });
	};

	$http.get(url)
		.then(
			function(resp){

				resp.data.response.list.listItems.items.forEach(
					function(listElement){
						Markers[listElement.id] = {
							lat: listElement.venue.location.lat,
							lng: listElement.venue.location.lng,
							message: listElement.venue.name,
							focus: false,
							draggable: false
						}
					}
				)
			}, 

			function(err) {
				alert("Error: ", err);
		});

	angular.extend($scope, {
		center: {
			lat: 19.043925,
			lng: -98.198204,
			zoom: 13
		},
		markers: Markers,
		defaults: {
			tileLayer: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			tileLayerOptions: {
				detectRetina: true,
				reuseTiles: true,
			}
		}
	});
})
