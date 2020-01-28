import React from 'react';

function Result(props) {
  let game = props.event;
  return (
    <a href={game.strVideo} rel="noopener noreferrer" target="_blank">
      <table className="result">
        <thead>
          <tr>
            <th colSpan="2">{game.dateEvent || game.strDate}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{game.strHomeTeam}</th>
            <th>{game.strAwayTeam}</th>
          </tr>
          <tr>
            <td>{game.intHomeScore}</td>
            <td>{game.intAwayScore}</td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className={
                game.strVideo ? 'highlights success' : 'highlights failure'
              }
            >
              {game.strVideo
                ? 'Click to watch highlights'
                : 'No highlights available'}
            </td>
          </tr>
        </tbody>
      </table>
    </a>
  );
}

export default Result;
