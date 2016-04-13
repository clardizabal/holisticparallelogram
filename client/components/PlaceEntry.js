import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

var placeEntryClasses = classNames('place-entry', 'animated', 'fadeInUp');


class PlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.onClick(this.props.place);
  }

  render() {
    return(
      <div className={placeEntryClasses}>
        <div className='place-info' >
          <h4>{ this.props.place.name }</h4>
          <p>{ this.props.place.address }</p>
        </div>
        <div className='place-entry-favorite'>
          <span onClick={this.handleClick.bind(this)} className='icon-heart' aria-hidden='true'></span>
        </div>
      </div>
    );
  }
}

export default PlaceEntry;