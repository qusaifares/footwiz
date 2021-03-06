import React, { Component } from 'react';
import TeamList from './TeamList.js';
import LeagueTable from './LeagueTable.js';

class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueInfo: {},
      teams: []
    };
  }
  componentDidMount() {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${this.props.match.params.league}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ leagueInfo: data.leagues[0] });
      })
      .catch((err) => console.log(err));
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${this.props.match.params.league}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ teams: data.teams });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className='league'>
        <div className='league-landing'>
          <img src={this.state.leagueInfo.strBadge} alt='' className='badge' />
          <div className='league-name'>{this.state.leagueInfo.strLeague}</div>
        </div>
        <section className='league-summary'>
          <div className='league-summary-title section-title'>
            {this.state.leagueInfo.strLeague}
          </div>
          <div className='league-description'>
            {this.state.leagueInfo.strDescriptionEN}
          </div>
        </section>
        <LeagueTable leagueId={this.props.match.params.league} />
        <TeamList teams={this.state.teams} />
      </div>
    );
  }
}

export default League;
