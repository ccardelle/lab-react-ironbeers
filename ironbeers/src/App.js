import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import axios from "axios";
class App extends React.Component {
  state = { allBeers: [] };

  componentDidMount() {
    axios.get(`https://ih-beer-api.herokuapp.com/beers`).then(beers => {
      this.setState({ allBeers: beers.data });
      // console.log(beers);
    });
  }
  displayAllBeers = () => {
    let beerListCopy = this.state.allBeers.map((beers, i) => {
      console.log(beers);
      return (
        <NavLink
          key={i}
          className="list-group-item list-group-item-action allbeers-group centered"
          activeClassName="selected"
          // to={`/country/${beers.data}`}
        >
          <img className="beer-img" src={beers.image_url} alt="" />
          <h4 className="text-uppercase font-weight-bold">{beers.name}</h4>
          <p>{beers.tagline}</p>
          <p>{beers.contributed_by}</p>
        </NavLink>
      );
    });
    return beerListCopy;
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-success">
          <NavLink className="navbar-brand" to={`/`}>
            {" "}
            🍺 ReactBeers
          </NavLink>
        </nav>
        <div className="container allbeers-container">
          <div className="list-group centered align-items-center">
            {this.displayAllBeers()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
