import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGeoLocation from "./useGeolocation";

// import ExternalInfo from "components/ExternalInfo";

const markerIcon = new L.Icon({
  iconUrl: require("./marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 7.2906, lng: 80.6337 });
  const ZOOM_LEVEL = 16;
  const mapRef = useRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      

     

      <div className="row">
        <div className="col text-center">
          
          <div className="col">
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              {location.loaded && !location.error && (
                <Marker
                  icon={markerIcon}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="row md-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-secondary" onClick={showMyLocation}>
            Locate Me 
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;