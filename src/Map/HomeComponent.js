import { GoogleComponent } from 'react-google-location';
 
//... 
import React, { Component } from 'react';
 
 
 
const API_KEY = "AIzaSyAolXVBph__8LXk-JukgnxDUI4LPDQAsxQ" 
 
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
      console.warn("result return here",this.state.place)
    return (
      <div >
         <GoogleComponent
         
          apiKey={"AIzaSyAolXVBph__8LXk-JukgnxDUI4LPDQAsxQ"}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default HomeComponent;
 