import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  .map {
  width:100%;
  height: 500px;
  position: static !important;
  }

`

export class MapContainer extends Component {
  render() {
    return (
      <MapWrapper>
        <Map google={this.props.google}
          zoom={14}
          className="map"
          style={{
            width: "100%",
            height: "500px",
            position: "static !important"
          }}
        >

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
          </InfoWindow>
        </Map>
      </MapWrapper >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCL7nACkayEVW5vzy5xWVdu8pwuxyu8q44")
})(MapContainer)