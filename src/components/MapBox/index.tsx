import { FC } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IMapBoxProps } from './types';
import { Box } from '@mui/material';
import { MAPBOX_TOKEN } from '../../constants';

/**
 * MapBox Component
 *
 * This component renders a Mapbox map centered at the specified longitude and latitude.
 *
 * @component
 * @param {object} props - The props for the MapBox component.
 * @param {number} props.longitude - The longitude at which to center the map.
 * @param {number} props.latitude - The latitude at which to center the map.
 * @returns {JSX.Element} The rendered MapBox component.
 *
 * @example
 * <MapBox
 *   longitude={-74.006}
 *   latitude={40.7128}
 * />
 */

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
          <Box>📍</Box>
        </Marker>
      </Map>
    </Box>
  );
};
