import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const rants = this.props.restaurants.map(restaurant => {
      return <li><Restaurant restaurant={restaurant} /></li>
    })
    return(
      <ul>
        {rants}
      </ul>
    );
  }
};

export default Restaurants;