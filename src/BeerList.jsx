import React, {Component} from 'react';
import {connector} from './redux/beersStore'


class BeerList extends Component {
  componentWillMount() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch('http://beer.fluentcloud.com/v1/beer', {
      method: 'GET',
      headers: headers,
      })
    .then(res => res)
    .then(res => this.props.resetBeers(res.beers))
    .catch(err => console.error(err));
  }



  render() {
    return(
      <h1>Working</h1>
    )
  }
}

export default connector(BeerList);
