import React from 'react';
import TeamListItem from './TeamListItem.js';

function TeamList(props) {
  return (
    <section className="teams">
      <div className="league-summary-title">Teams</div>
      <div className="team-list">
        {props.teams.map(team => (
          <TeamListItem team={team} key={team.idTeam} />
        ))}
      </div>
    </section>
  );
}

export default TeamList;
