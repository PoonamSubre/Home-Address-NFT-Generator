import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './MapDisplay.css';

const ChangeMapView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const MapDisplay = ({ address }) => {
  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
          params: {
            q: address,
            key: '0f0ab68b25374ba99fe0ec2d3c673077',
          },
        });
        const location = response.data.results[0].geometry;
        setPosition([location.lat, location.lng]);
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    if (address) {
      fetchGeolocation();
    }
  }, [address]);

  return (
    <Box className="map-container">
      <Typography variant="h6" className="map-title"><b>Map Location</b></Typography>
      <div className="map-inner-container">
        <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
          <ChangeMapView center={position} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {address && (
            <Marker position={position}>
              <Popup>{address}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </Box>
  );
};

export default MapDisplay;
