angular.module('ubicla.controllers', [])

.service('$markers', function() {
	var markersList = {};
	return {
		getMarkers: function(){
			return markersList;
		},
		setMarkers: function(obj){
			markersList = obj;
		}
	}
})

.controller('MenuCtrl', function($scope) {
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
})

.controller('MapSmartbikesCtrl', function($scope, $http) {
	
	Markers = {};
	$http.get("https://api.foursquare.com/v2/lists/5294d88111d29aff21b2f8d3?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006")
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
		})

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

.controller('MapEstacionamientosCtrl', function($scope, $http) {
	
	Markers = {};
	$http.get("https://api.foursquare.com/v2/lists/5070ff61e4b0339d310225d2?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006")
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
		})

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

.controller('MapBiciamigosCtrl', function($scope, $http) {
	
	Markers = {};
	//talleres $http.get("https://api.foursquare.com/v2/lists/5073386f498e74a4f611cbe9?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006")
	$http.get("https://api.foursquare.com/v2/lists/50710a75e4b019e66b5c19d2?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006")
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
		})

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

.controller('MapTalleresCtrl', function($scope, $http) {
	
	Markers = {};
	$http.get("https://api.foursquare.com/v2/lists/5073386f498e74a4f611cbe9?oauth_token=40GT1OHITFMQRGZR4GFG2VDMJ35W42SOB020D2EVA0PYU2LI&v=20131006")
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
		})

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

