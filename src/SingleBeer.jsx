import React, {Component} from 'react';
import {connector} from './redux/beersStore';
import Beer from './Beer';

class SingleBeer extends Component {
  generateBeer() {
    const id = Number(this.props.match.params.id);
    const beer = this.getBeerFromStore(id);

    if(!beer) {
      this.getBeerFromApi(id);
      return "Getting Beer!"
    } else {
      return (<Beer beer={beer} />);
    }
  }

  getBeerFromStore(id) {
    const beers = this.props.beers.filter(beer => beer.id === id)

    return beers[0];
  }

  getBeerFromApi(id) {
    fetch(`http://beer.fluentcloud.com/v1/beer/${id}`)
    .then(res => res.json())
    .then(res => this.props.addBeer(res[0]))
    .catch(err => console.error(err));

  }

  render() {
    return (
      <ul className={"beers"}>
        {this.generateBeer()}
      </ul>
    )
  }

}

export default connector(SingleBeer);
