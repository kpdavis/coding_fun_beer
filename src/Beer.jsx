import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Beer extends Component {
  render(){
    return(
      <div className={'panel panel-default'}>
        <Link to={`/beers/${this.props.beer.id}`}>
          <section className={"beer-listing panel-body"}>
            <h2 className={"name text-left"}>{this.props.beer.name}</h2>

            <h2 >{this.props.beer.likes}</h2>
            <i className={"fa fa-thumbs-up fa-lg"} aria-hidden={"true"}></i>
            <i className={"fa fa-thumbs-down fa-lg"} aria-hidden={"true"}></i>
          </section>
        </Link>
      </div>
    )
  }
}

export default Beer;
