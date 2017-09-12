import React, {Component} from 'react';
import {connector} from './redux/beersStore'
import Beer from './Beer'


class BeerList extends Component {
  componentWillMount() {
  		fetch('http://beer.fluentcloud.com/v1/beer')
  		.then(res => res.json())
  		.then(res => this.props.resetBeers(res))
  		.catch(err => console.error(err));
  	}

  	generateBeers() {
  		return this.props.beers.map(beer => (<Beer key={beer.id} beer={beer} />));
  	}

  	render() {
  		return (
  			<ul className={"beers"}>
  				{this.generateBeers()}
  			</ul>
  		);
  	}
  }

export default connector(BeerList);
