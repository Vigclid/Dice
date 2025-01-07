import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const TestingGoogle = () => (
    <APIProvider apiKey={"AIzaSyAFqiheZ8imp48Zm1h-4dtO1IJtZK2zD78"}>
        <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        />
    </APIProvider>
)

export default TestingGoogle;