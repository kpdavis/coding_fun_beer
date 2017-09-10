import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/beersStore'
import BeerList from './BeerList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <header>
              <Link to={"/"}>
                <h1>Beer Rater</h1>
              </Link>
            </header>
            <Route exact path="/" component={BeerList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
