
import React, {Component} from 'react';

import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




class Mapcontainer extends Component {
  render(){
    const style = {
        width: '100%',
        height: '100%',
        // overflow: 'hidden',
        // position: 'relative'
      }
      const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
    return (
      <div >
        
       
        <Map 
        google={this.props.google} 
        style={style} 
        initialCenter={{
            lat: 12.971599,
            lng: 77.594566
          }} 
          zoom={14} 
          className="mapcontainer"   >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
      
      </div>
    );
  }
}








export default GoogleApiWrapper({
  apiKey: ("AIzaSyAolXVBph__8LXk-JukgnxDUI4LPDQAsxQ")
})(Mapcontainer)
