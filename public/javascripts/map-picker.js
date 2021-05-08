
let cbMap, cpMap, rsMap, wsMap, realTimeMap;
let markers = [];

function initMap() {
	cbMap = new google.maps.Map(document.getElementById("cbMap"), {
		zoom: 7,
		center: {
			lat: 6.9271,
			lng: 79.8612
		},
	});

	let marker = {lat: 6.9271, lng: 79.8612};
	addMarker(marker, cbMap);

	cpMap = new google.maps.Map(document.getElementById("cpMap"), {
		zoom: 7,
		center: {
			lat: 6.9271,
			lng: 79.8612
		},
	});

	addMarker(marker, cpMap);

	rsMap = new google.maps.Map(document.getElementById("rsMap"), {
		zoom: 7,
		center: {
			lat: 6.9271,
			lng: 79.8612
		},
	});

	addMarker(marker, rsMap);

	wsMap = new google.maps.Map(document.getElementById("wsMap"), {
		zoom: 7,
		center: {
			lat: 6.9271,
			lng: 79.8612
		},
	});

	addMarker(marker, wsMap);

	realTimeMap = new google.maps.Map(document.getElementById("realTimeMap"), {
		zoom: 7,
		center: {
			lat: 6.9271,
			lng: 79.8612
		},
	});

	addMarker(marker, realTimeMap);
}

function addMarker(location, map) {
	let marker = new google.maps.Marker({
		position: location,
		map: map
	});
	markers.push(marker);
}

function setMapOnAll(map) {
	for (let i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

function clearMarkers() {
	setMapOnAll(null);
}

function showMarkers() {
	setMapOnAll(map);
}

function deleteMarkers() {
	clearMarkers();
	markers = [];
}
