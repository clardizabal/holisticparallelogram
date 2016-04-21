// import {default as FaSpinner} from "react-icons/lib/fa/spinner";
import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import {GoogleMap, GoogleMapLoader, Marker} from 'react-google-maps';
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";

class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}>
          </GoogleMap>
        }
      />      
    );
  }
}

export default SimpleMap;
