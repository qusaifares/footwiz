import React, { Component } from 'react';
import LeagueTableRow from './LeagueTableRow.js';

class LeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTable: []
    };
  }
  componentDidMount() {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${this.props.leagueId}&s=1920`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ currentTable: data.table });
      });
  }
  render() {
    return (
      <>
        <div className="section-title">Current Table</div>
        <table className="league-table">
          <thead>
            <tr>
              <th className="team-column">Team</th>
              <th>Played</th>
              <th>Win</th>
              <th>Draw</th>
              <th>Loss</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentTable.map(row => (
              <LeagueTableRow data={row} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default LeagueTable;
