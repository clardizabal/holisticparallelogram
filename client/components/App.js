import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

import Header from './Header';
import PlaceContainer from './PlaceContainer';
import SavedPlaceContainer from './SavedPlaceContainer';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
import $ from 'jquery';
// import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import SimpleMap from './SimpleMap';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <SimpleMap/>
        </div>
        <div className='grid'>
          <PlaceContainer/>
          <SavedPlaceContainer/>
        </div>
      </div>
    );
  }
}

export default App;
