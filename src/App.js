import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import League from './League.js';
import Team from './Team.js';
import Player from './Player.js';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueIds: ['4328', '4331', '4332', '4334', '4335'],
      leaguesInfo: []
    };
  }
  componentDidMount() {
    this.state.leagueIds.forEach(id => {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_SOCCER_API_KEY}/lookupleague.php?id=${id}`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            leaguesInfo: [...this.state.leaguesInfo, data.leagues[0]]
          })
        );
    });
  }
  render() {
    return (
      <>
        <header>
          <Link to="/">
            <Header />
          </Link>
        </header>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  leagueIds={this.state.leagueIds}
                  leaguesInfo={this.state.leaguesInfo}
                />
              )}
            />
            <Route
              path="/leagues/:league"
              exact
              render={routerProps => (
                <League
                  match={routerProps.match}
                  leaguesInfo={this.state.leaguesInfo}
                />
              )}
            />
            <Route
              path="/teams/:team"
              exact
              render={routerProps => <Team match={routerProps.match} />}
            />
            <Route
              path="/players/:player"
              exact
              render={routerProps => <Player match={routerProps.match} />}
            />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
