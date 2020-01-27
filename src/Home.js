import React from 'react';
import LeagueListItem from './LeagueListItem.js';

function Home(props) {
  console.log(props.leaguesInfo);
  return (
    <>
      <LeagueListItem />
      <h2>Select a league</h2>
      <div className="leagues">
        {props.leaguesInfo.map(league => (
          <LeagueListItem league={league} key={league.idLeague} />
        ))}
      </div>
    </>
  );
}

export default Home;
