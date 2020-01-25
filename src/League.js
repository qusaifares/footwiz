import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueInfo: {},
      teams: []
    };
  }
  componentDidMount() {
    this.setState({
      leagueInfo: this.props.leaguesInfo.filter(
        league => league.idLeague === this.props.match.params.league
      )[0]
    });
    let teams = [];
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${this.props.match.params.league}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
  render() {
    console.log(this.state.leagueInfo);
    return (
      <>
        <div className="league-landing">
          <img src={this.state.leagueInfo.strBadge} alt="" className="badge" />
          <div className="league-name">{this.state.leagueInfo.strLeague}</div>
        </div>
        <section className="league-summary">
          <div className="league-summary-title">
            {this.state.leagueInfo.strLeague}
          </div>
          <div className="league-description">
            {this.state.leagueInfo.strDescriptionEN}
          </div>
        </section>
        <section className="teams">
          <div className="league-summary-title">Teams</div>
        </section>
      </>
    );
  }
}

export default League;
