import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const position: LatLngTuple = [51.505, -0.09];

const App: React.FC = () => {
  return (
    <div style={{ height: '800px', width: '800px', background: 'blue' }}>
      <Map id="mapid" center={position} zoom={13} style={{ height: '100%' }}>
        <TileLayer
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>[吹き出しに表示するテキスト]</Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default App;
