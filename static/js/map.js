
var myMap = L.map("map", {
    center: [40.73, -74.0059],
    zoom: 5
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



var link = "/api/brewery_list_api_coordintes.geojson";

// Our style object
var mapStyle = {
    color: "red",
};

// Getting our GeoJSON data
d3.json(link).then(function (data) {
    // Creating a GeoJSON layer with the retrieved data
    console.log(data);
    L.geoJson(data, {
        // Passing in our style object
        style: mapStyle
    }).addTo(myMap);
});