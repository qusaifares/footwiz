import React, { Component } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import League from './components/League.js';
import Team from './components/Team.js';
import Player from './components/Player.js';
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
    this.state.leagueIds.forEach((id) => {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            leaguesInfo: [...this.state.leaguesInfo, data.leagues[0]]
          })
        )
        .catch((err) => console.log(err));
    });
  }
  render() {
    return (
      <>
        <header>
          <Link to='/'>
            <Header />
          </Link>
        </header>
        <main>
          <ScrollToTop />
          <Switch>
            <Route
              path='/'
              exact
              component={() => (
                <Home
                  leagueIds={this.state.leagueIds}
                  leaguesInfo={this.state.leaguesInfo}
                />
              )}
            />
            <Route
              path='/leagues/:league'
              exact
              render={(routerProps) => <League match={routerProps.match} />}
            />
            <Route
              path='/teams/:team'
              exact
              render={(routerProps) => <Team match={routerProps.match} />}
            />
            <Route
              path='/players/:player'
              exact
              render={(routerProps) => <Player match={routerProps.match} />}
            />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
