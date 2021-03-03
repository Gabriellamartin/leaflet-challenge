// starter code from https://leafletjs.com/examples/quick-start/
//got us corrdinates from https://stackoverflow.com/questions/28117281/show-only-united-states-when-using-leaflet-js-and-osm
var mymap = L.map('mapid').setView([39.82, -98.58], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2FicmllbGxhbWFydGluIiwiYSI6ImNrbGJtYXkwaDM5a2szMHQ3dzU5cGVlbzMifQ.B2O_xEd7MixMmO24nAPjYg'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

var marker = L.marker([36.778259, -119.417931]).addTo(mymap);
var circle = L.circle([36.778259, -119.417931], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(mymap);
var marker = L.marker([36.716, 121.348]).addTo(mymap);
var circle = L.circle([36.716, 121.348], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(mymap);
var marker = L.marker([36.084621, -96.921387]).addTo(mymap);
var circle = L.circle([36.084621, -96.921387], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(mymap);
