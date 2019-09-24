import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapStateToProps = () => {
  return ({ })
}

const mapDispatchToProps = () => {
  return { }
}

class RestaurantInput extends Component {
  render() {
    return (
      <div>
        Restaurant Input
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput);
