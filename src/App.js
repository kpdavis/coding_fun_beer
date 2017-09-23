import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/beersStore'
import BeerList from './BeerList';
import SingleBeer from './SingleBeer'
import AddNewBeer from './AddNewBeer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav className={"navbar navbar-inverse"}>
              <div className={"container-fluid"}>
                <div className={"navbar-header"}>
                  <Link to={"/"}>
                    <h1 className={"text-center"}>Beer Rater</h1>
                  </Link>
                </div>
              </div>
            </nav>
            <div className={"container"}>
              <Route exact path="/" component={BeerList} />
              <Route path="/beer" component={BeerList} />
              <Route path={"/beer/:id"} component={SingleBeer} />
              <Route path="/add" component={AddNewBeer} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
