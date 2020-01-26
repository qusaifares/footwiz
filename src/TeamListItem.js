import React from 'react';

function TeamListItem(props) {
  console.log(props.team);
  return (
    <div className="team">
      <img
        src={props.team.strTeamBadge}
        alt={props.team.strTeam}
        className="team-badge"
      />
      <div className="team-name">{props.team.strTeam}</div>
    </div>
  );
}

export default TeamListItem;
