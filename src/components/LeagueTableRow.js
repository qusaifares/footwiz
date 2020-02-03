import React from 'react';

function LeagueTableRow(props) {
  return (
    <tr>
      <td className="team-column">{props.data.name}</td>
      <td>{props.data.played}</td>
      <td>{props.data.win}</td>
      <td>{props.data.draw}</td>
      <td>{props.data.loss}</td>
      <td>{props.data.goalsfor}</td>
      <td>{props.data.goalsagainst}</td>
      <td>{props.data.goalsdifference}</td>
      <td className="points">{props.data.total}</td>
    </tr>
  );
}

export default LeagueTableRow;
