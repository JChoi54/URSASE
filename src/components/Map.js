import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map(){
    return (
        <GoogleMap 
            defaultZoom={15} 
            defaultCenter={{lat: 43.124500, lng: -77.631500}} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap