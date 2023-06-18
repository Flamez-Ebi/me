function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 9.0479, lng: 7.5155};


    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Asokoro, Abuja' // Title Location
    });
}
