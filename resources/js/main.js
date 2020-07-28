function initMap() {
    // The location of Dhaka
    var Dhaka = {lat: 23.738494, lng: 90.413626};
    // The map, centered at Dhaka
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: Dhaka});
    // The marker, positioned at Dhaka
    var marker = new google.maps.Marker({position: Dhaka, map: map});
  };
  

