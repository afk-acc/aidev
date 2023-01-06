var google;

function init() {
  var myLatlng = new google.maps.LatLng(41.27960843288907, 69.25268556392226);

  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    styles: [
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            hue: "#ff0000",
          },
        ],
      },
    ],
  };

  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.27960843288907, 69.25268556392226),
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: "AI GEN DEV",
  });
}
google.maps.event.addDomListener(window, "load", init);
