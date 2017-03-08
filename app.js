var  app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    // Map Settings //
    $scope.initialise = function() {
        var myLatlng = new google.maps.LatLng(50, 2);
        var mapOptions = {
            center: myLatlng,
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // Geo Location /
       /* navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                title: "My Location",
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
				http://codepen.io/MarcMalignan/pen/jABfk
            });
        });*/
         


        $scope.map = map;
        // Additional Markers //
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                title: info.city,
                icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  
        for (i = 0; i < cities.length; i++){
          //  createMarker(cities[i]);
        }

    };
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());

});

var cities = [
    {
        city : 'London',
        desc : 'Test',
        lat : 51.508515,
        long :  -0.125487 
    },
     {
        city : 'Amsterdam',
        desc : 'Test1',
        lat : 52.370216,
        long :  4.895168 
    }
];
