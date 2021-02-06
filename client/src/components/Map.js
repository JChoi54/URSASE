import React from 'react';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    height: '100%'
};

const center = {
    lat: 43.124500,
    lng: -77.631500
};

function Map(){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDOdf5Cl8TLDR8iLxF9BNIBAvmVI7ceqXI"
    })

    // eslint-disable-next-line
    const [map, setMap] = React.useState(null)

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={map => {
                setMap(map)
            }}
        />
    ) : <></>;
}

export default React.memo(Map)