angular.module('ubicla.controllers', [])

.controller('MenuCtrl', function($scope) {
})


.controller('MapCtrl', function($scope, $stateParams, $http, leafletData) {
	$scope.seccion = {};
	Markers = {};
	var url = "";
	switch($stateParams.seccion){
		
		case "smartbikes":
			$scope.seccion.nombre = "Smartbikes";
			url = "https://api.foursquare.com/v2/lists/5294d88111d29aff21b2f8d3?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006"
			break;
		case "estacionamientos":
			$scope.seccion.nombre = "Estacionamientos";
			url = "https://api.foursquare.com/v2/lists/5070ff61e4b0339d310225d2?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006"
			break;
		case "biciamigos":
			$scope.seccion.nombre = "BiciAmigos";
			url = "https://api.foursquare.com/v2/lists/50710a75e4b019e66b5c19d2?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006"
			break;
		case "talleres":
			$scope.seccion.nombre = "Talleres";
			url = "https://api.foursquare.com/v2/lists/5073386f498e74a4f611cbe9?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006"
			break;
	}

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
