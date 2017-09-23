import React, {Component} from 'react';
import {connector, store} from './redux/beersStore'
import Beer from './Beer'


class AddNewBeer extends Component {
  addNewBeer(e) {
    e.preventDefalut();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let newBeer = {
      name: this.ref.name.value,
      likes: this.ref.likes.value
    }

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(newBeer)
    }

    fetch('http://beer.fluentcloud.com/v1/beer', options)
    .then(res => res.json())
    .then(res => {
        const beer = {
          id: res.id,
          name: this.ref.name.value,
          likes: this.ref.name.value
        }
      this.props.addBeers(beer)
    })
    .catch(err => console.error(err));
    this.ref.name.value = '';
    this.ref.likes.value = '';
  }
  render() {
    return (
        <div>
  			     <form className={"beers"} onSubmit={this.addNewBeer}>
                <label htmlFor="name" >Name of Beer:</label>
  				      <input type="text" name="name" ref="name" />
                <label htmlFor="likes" >Starting Likes</label>
                <input type="number" name="likes" ref="likes" />
             </form>
        </div>
  		);
  	}
  }

export default connector(AddNewBeer);
