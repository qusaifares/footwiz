import React from 'react';
import { Link } from 'react-router-dom';

function LeagueListItem(props) {
  console.log(props.league && props.league.idLeague);
  return (
    <>
      {props.league && (
        <Link to={`/leagues/${props.league.idLeague}`}>
          <img src={props.league.strLogo} alt="" className="league-logo" />
        </Link>
      )}
    </>
  );
}

export default LeagueListItem;
