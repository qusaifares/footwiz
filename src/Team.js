import React, { Component } from 'react';
import Squad from './Squad.js';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {}
    };
  }
  componentDidMount() {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_SOCCER_API_KEY}/lookupteam.php?id=${this.props.match.params.team}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ team: data.teams[0] });
      });
  }
  render() {
    return (
      <>
        <div className="team-landing">
          <img
            src={this.state.team.strTeamBadge}
            alt={this.state.team.strTeam}
            className="team-badge"
          />
          <div className="team-name">{this.state.team.strTeam}</div>
        </div>
        <div className="team-info">
          <div className="team-summary-title section-title">
            {this.state.team.strTeam}
          </div>
          <div className="team-summary">
            <div className="team-description">
              {this.state.team.strDescriptionEN}
            </div>
            <div className="team-media">
              <div className="stadium">
                <img
                  src={this.state.team.strStadiumThumb}
                  alt={this.state.team.strStadium}
                  className="stadium-image"
                />
                <div className="stadium-name">
                  <span>Home Stadium:</span> {this.state.team.strStadium}
                </div>
              </div>
              <div className="jersey">
                <img
                  src={this.state.team.strTeamJersey}
                  alt={`${this.state.team.strTeam} Jersey`}
                  className="jersey-image"
                />
                <div className="jersey-text">{`${this.state.team.strTeam} Official Jersey`}</div>
              </div>
            </div>
          </div>
        </div>
        <Squad teamId={this.props.match.params.team} />
      </>
    );
  }
}

export default Team;
