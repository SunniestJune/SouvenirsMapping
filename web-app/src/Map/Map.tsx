import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers/Markers";

import "./Map.css";

interface Props {}

const Map: React.FC<Props> = (props: Props) => {
  return (
    <MapContainer
      id="map"
      center={[44.8308558, -0.6112553]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers></Markers>
    </MapContainer>
  );
};

export default Map;
