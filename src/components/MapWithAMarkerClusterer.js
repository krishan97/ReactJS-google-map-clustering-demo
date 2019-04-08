import React from 'react';
import MarkerImg from './../assets/images/placeholder.png';

import { mapStyles, GOOGLE_API_KEY, GOOGLE_DEFAULT_ZOOM, GOOGLE_API_VERSION, GOOGLE_MAP_CENTER } from '../constants';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { compose, withProps, withHandlers, withStateHandlers } = require("recompose");

export const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=${GOOGLE_API_VERSION}`,
        loadingElement: <div style={{ height: `100vh` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withStateHandlers(() => ({
        infoIndex: null,
     }), {

        }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            markerClusterer.getMarkers()
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap defaultZoom={GOOGLE_DEFAULT_ZOOM} defaultCenter={GOOGLE_MAP_CENTER} defaultOptions={{ styles: mapStyles }} >
        <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={30} >
            {props.markers.map(marker => 
                 <Marker key={marker.id} position={{ lat: marker.coordinates[1], lng: marker.coordinates[0] }} icon={MarkerImg} >
                </Marker>
            )}
        </MarkerClusterer>
    </GoogleMap>
);
