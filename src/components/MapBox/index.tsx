import { FC } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IMapBoxProps } from './types';
import { Box } from '@mui/material';

const MAPBOX_TOKEN = import.meta.env.VITE_MAP_BOX_TOKEN as string; // Replace with your Mapbox token

export const MapBox: FC<IMapBoxProps> = ({ longitude, latitude }) => {
  return (
    <Box height='500px'>
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude,
          latitude,
          zoom: 5,
        }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        <Marker latitude={latitude} longitude={longitude}>
          <div>📍</div>
        </Marker>
      </Map>
    </Box>
  );
};
