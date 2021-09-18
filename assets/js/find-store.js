"use strict";

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 11,
    center: { lat: 37.5326, lng: 127.024612 },
  });

  // Load the stores GeoJSON onto the map.

  map.data.loadGeoJson("../assets/data/stores.json", {
    idPropertyName: "storeid",
  });

  const apiKey = "AIzaSyDHYhOqeMPDFmHpu80am-eHDwCrLErjXW4";
  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener("click", (event) => {
    const name = event.feature.getProperty("name");
    const adress = event.feature.getProperty("adress");
    const tel = event.feature.getProperty("tel");
    const position = event.feature.getGeometry().get();
    const content = `
        <h2 class="store-map-name">${name}</h2>
        <p class="store-map-adress">${adress}</p>
        <p class="store-map-tel">${tel}</p>
      `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
    infoWindow.open(map);
  });
}
