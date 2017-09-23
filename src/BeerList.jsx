import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connector } from './redux/beersStore';
import Beer from './Beer';
import AddNewBeer from './AddNewBeer'


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
        <div>
            <Link to='/add' component={ AddNewBeer }>
              <button>Add a New Beer</button>
            </Link>
  			     <ul className={"beers"}>
  				     {this.generateBeers()}
  			     </ul>
        </div>
  		);
  	}
  }

export default connector(BeerList);
