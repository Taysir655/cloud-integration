import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = () => <div className="marker"> Your Location</div>;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const MapContainer = styled.div`
  width: 900px;
  height: 550px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 15px;
`;

// specify the initial center and zoom level for the Google Map
const App = () => {
  const mapOptions = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 14,
  };

  return (
    <AppContainer>
      <Title>Welcome to Landing Page</Title>
      <MapContainer>
        {/* integrate Google Maps */}
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAejfiC6tGsc2gK615RfiZpylty_v3dzos",
            language: "en",
          }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <AnyReactComponent
            lat={mapOptions.center.lat}
            lng={mapOptions.center.lng}
          />
        </GoogleMapReact>
      </MapContainer>
      <Description>
        Find Your Way to Spectacular Destinations with Our Map!
      </Description>
      <div className="cloud-integration">
        {/* Cloud integration content goes here */}
      </div>
    </AppContainer>
  );
};

export default App;
