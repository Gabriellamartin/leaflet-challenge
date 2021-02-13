// Json code from leaflet https://leafletjs.com/examples/geojson/ to start my logic.js
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

// starter code from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php unsure of how to import my dataset
{
    type: "FeatureCollection",
    metadata: {
      generated: Long Integer,
      url: String,
      title: String,
      api: String,
      count: Integer,
      status: Integer
    },
    bbox: [
      minimum longitude,
      minimum latitude,
      minimum depth,
      maximum longitude,
      maximum latitude,
      maximum depth
    ],
    features: [
      {
        type: "Feature",
        properties: {
          mag: Decimal,
          place: String,
          time: Long Integer,
          updated: Long Integer,
          tz: Integer,
          url: String,
          detail: String,
          felt:Integer,
          cdi: Decimal,
          mmi: Decimal,
          alert: String,
          status: String,
          tsunami: Integer,
          sig:Integer,
          net: String,
          code: String,
          ids: String,
          sources: String,
          types: String,
          nst: Integer,
          dmin: Decimal,
          rms: Decimal,
          gap: Decimal,
          magType: String,
          type: String
        },
        geometry: {
          type: "Point",
          coordinates: [
            longitude,
            latitude,
            depth
          ]
        },
        id: String
      },
      …
    ]
  }